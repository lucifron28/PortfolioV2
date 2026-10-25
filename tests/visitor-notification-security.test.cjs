/* eslint-env node */
/* eslint-disable @typescript-eslint/no-require-imports */

const assert = require('node:assert/strict')
const crypto = require('node:crypto')
const path = require('node:path')
const { afterEach, beforeEach, test } = require('node:test')
require('./register-typescript.cjs')

const projectRoot = path.resolve(__dirname, '..')
const redisUrl = 'https://redis.example.test/'
const redisToken = 'unit-test-token'
const webhookUrl = 'https://discord.example.test/webhook'
const redisKeyPrefix = 'portfolio:visitor-notify:v1:{visitor-notification}'
const envKeys = ['UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN', 'DISCORD_WEBHOOK_URL', 'NODE_ENV']

const { NextRequest } = require('next/server')
let savedFetch
let savedEnvironment
let fakeRedis

beforeEach(() => {
  savedFetch = global.fetch
  savedEnvironment = Object.fromEntries(envKeys.map((key) => [key, process.env[key]]))
  fakeRedis = createFakeRedis()

  process.env.UPSTASH_REDIS_REST_URL = redisUrl
  process.env.UPSTASH_REDIS_REST_TOKEN = redisToken
  process.env.DISCORD_WEBHOOK_URL = webhookUrl
  process.env.NODE_ENV = 'production'
  global.fetch = fakeRedis.fetch
})

afterEach(() => {
  global.fetch = savedFetch
  for (const [key, value] of Object.entries(savedEnvironment)) {
    if (value === undefined) delete process.env[key]
    else process.env[key] = value
  }
})

function createFakeRedis() {
  let nowSeconds = 1_000_000
  let redisBehavior
  let webhookBehavior
  const calls = []
  const ipExpiry = new Map()
  let globalAdmissions = []

  const fetch = async (input, init = {}) => {
    const url = typeof input === 'string' ? input : input.url
    const call = { url, init }
    calls.push(call)

    if (url === redisUrl) {
      assert.equal(init.method, 'POST')
      assert.equal(new Headers(init.headers).get('authorization'), `Bearer ${redisToken}`)
      if (redisBehavior) return redisBehavior(call)
      return evaluateRateLimit(call)
    }

    if (url === webhookUrl) {
      if (webhookBehavior) return webhookBehavior(call)
      return new Response(null, { status: 204 })
    }

    throw new Error('Unexpected outbound fetch intercepted by notification tests')
  }

  function evaluateRateLimit({ init }) {
    const command = JSON.parse(init.body)
    assert.equal(command[0], 'EVAL')
    assert.equal(command[2], '2')

    const [, script, , ipKey, globalKey, token, windowMs, cooldownSeconds, maxAttempts] = command
    assert.match(script, /redis\.call\('TIME'\)/)
    assert.equal(ipKey, `${redisKeyPrefix}:ip:${token}`)
    assert.equal(globalKey, `${redisKeyPrefix}:global`)
    assert.equal(windowMs, '900000')
    assert.equal(cooldownSeconds, '900')
    assert.equal(maxAttempts, '20')

    globalAdmissions = globalAdmissions.filter((entry) => entry.time > nowSeconds - Number(windowMs) / 1000)
    const expiresAt = ipExpiry.get(token)
    if (expiresAt !== undefined && expiresAt > nowSeconds) return jsonResponse({ result: 0 })
    if (globalAdmissions.length >= Number(maxAttempts)) return jsonResponse({ result: 0 })

    ipExpiry.set(token, nowSeconds + Number(cooldownSeconds))
    globalAdmissions.push({ time: nowSeconds, token })
    return jsonResponse({ result: 1 })
  }

  return {
    calls,
    fetch,
    advanceSeconds(seconds) {
      nowSeconds += seconds
    },
    admissions() {
      return globalAdmissions.length
    },
    redisCalls() {
      return calls.filter((call) => call.url === redisUrl).length
    },
    webhookCalls() {
      return calls.filter((call) => call.url === webhookUrl).length
    },
    setRedisBehavior(behavior) {
      redisBehavior = behavior
    },
    setWebhookBehavior(behavior) {
      webhookBehavior = behavior
    },
  }
}

function jsonResponse(value, status = 200) {
  return new Response(JSON.stringify(value), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}

function loadFresh(relativePath) {
  const absolutePath = path.resolve(projectRoot, relativePath)
  delete require.cache[absolutePath]
  return require(absolutePath)
}

function tokenFor(value) {
  return crypto.createHash('sha256').update(value).digest('hex').slice(0, 32)
}

function makeRequest({
  ip = '203.0.113.42',
  url = 'https://portfolio.example/about?campaign=spring',
  headers = {},
  cookie,
} = {}) {
  const requestHeaders = {
    accept: 'text/html',
    'sec-fetch-dest': 'document',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/131.0.0.0',
    'x-forwarded-for': ip,
    ...headers,
  }
  if (cookie) requestHeaders.cookie = cookie
  return new NextRequest(url, { headers: requestHeaders })
}

async function runMiddleware(request) {
  const { middleware } = loadFresh('middleware.ts')
  const promises = []
  const event = { waitUntil(promise) { promises.push(promise) } }
  const response = await middleware(request, event)
  return { response, promises }
}

test('the same IP is checked on every request when the browser sends no cookie', async () => {
  const first = await runMiddleware(makeRequest())
  await Promise.all(first.promises)
  const second = await runMiddleware(makeRequest())
  await Promise.all(second.promises)

  assert.equal(fakeRedis.redisCalls(), 2)
  assert.equal(fakeRedis.webhookCalls(), 1)
  assert.equal(first.response.status, 200)
  assert.equal(second.response.status, 200)
  const cookie = first.response.cookies.get('portfolio_visit_cooldown')
  assert.equal(cookie.value, tokenFor('203.0.113.42'))
  assert.equal(cookie.maxAge, 900)
  assert.equal(cookie.httpOnly, true)
  assert.equal(cookie.secure, true)
  assert.equal(cookie.sameSite, 'lax')
  assert.equal(cookie.path, '/')
})

test('per-IP cooldown expires after 900 seconds', async () => {
  const { allowVisitorNotification } = loadFresh('lib/visitor-notification-rate-limit.ts')
  const token = tokenFor('203.0.113.7')

  assert.equal(await allowVisitorNotification(token), true)
  assert.equal(await allowVisitorNotification(token), false)
  fakeRedis.advanceSeconds(900)
  assert.equal(await allowVisitorNotification(token), true)
})

test('concurrent requests for one IP admit only one notification', async () => {
  const { allowVisitorNotification } = loadFresh('lib/visitor-notification-rate-limit.ts')
  const token = tokenFor('same-ip')
  const results = await Promise.all(Array.from({ length: 32 }, () => allowVisitorNotification(token)))

  assert.equal(results.filter(Boolean).length, 1)
  assert.equal(fakeRedis.redisCalls(), 32)
})

test('different IPs share a rolling global cap, and later requests stay blocked until it expires', async () => {
  const { allowVisitorNotification } = loadFresh('lib/visitor-notification-rate-limit.ts')
  const results = await Promise.all(
    Array.from({ length: 25 }, (_, index) => allowVisitorNotification(tokenFor(`ip-${index}`))),
  )

  assert.equal(results.filter(Boolean).length, 20)
  const laterRequests = await Promise.all(
    Array.from({ length: 80 }, (_, index) => allowVisitorNotification(tokenFor(`after-cap-${index}`))),
  )
  assert.equal(laterRequests.filter(Boolean).length, 0)
  assert.equal(fakeRedis.admissions(), 20)

  fakeRedis.advanceSeconds(900)
  assert.equal(await allowVisitorNotification(tokenFor('after-window')), true)
})

test('separate module instances observe the same provider state', async () => {
  const firstModule = loadFresh('lib/visitor-notification-rate-limit.ts')
  const secondModule = loadFresh('lib/visitor-notification-rate-limit.ts')
  const token = tokenFor('cold-module-instance')

  assert.notEqual(firstModule, secondModule)
  assert.equal(await firstModule.allowVisitorNotification(token), true)
  assert.equal(await secondModule.allowVisitorNotification(token), false)
})

test('a matching cooldown cookie skips the server check', async () => {
  const ip = '198.51.100.27'
  const token = tokenFor(ip)
  const { response, promises } = await runMiddleware(makeRequest({
    ip,
    cookie: `portfolio_visit_cooldown=${token}`,
  }))

  assert.equal(response.status, 200)
  assert.equal(response.cookies.get('portfolio_visit_cooldown'), undefined)
  assert.equal(fakeRedis.redisCalls(), 0)
  assert.equal(fakeRedis.webhookCalls(), 0)
  assert.equal(promises.length, 0)
})

test('a rate-limited request still gets a normal page response', async () => {
  const { allowVisitorNotification } = loadFresh('lib/visitor-notification-rate-limit.ts')
  for (let index = 0; index < 20; index += 1) {
    assert.equal(await allowVisitorNotification(tokenFor(`fill-${index}`)), true)
  }

  const { response, promises } = await runMiddleware(makeRequest({ ip: '192.0.2.90' }))
  await Promise.all(promises)
  assert.equal(response.status, 200)
  assert.notEqual(response.status, 429)
  assert.equal(fakeRedis.webhookCalls(), 0)
})

test('middleware registers background work and returns while Redis and webhook calls are pending', async () => {
  let releaseRedis
  let releaseWebhook
  let redisStartedResolve
  let webhookStartedResolve
  const redisStarted = new Promise((resolve) => { redisStartedResolve = resolve })
  const webhookStarted = new Promise((resolve) => { webhookStartedResolve = resolve })
  const redisResult = new Promise((resolve) => { releaseRedis = resolve })
  const webhookResult = new Promise((resolve) => { releaseWebhook = resolve })
  fakeRedis.setRedisBehavior(() => {
    redisStartedResolve()
    return redisResult
  })
  fakeRedis.setWebhookBehavior(() => {
    webhookStartedResolve()
    return webhookResult
  })

  const { middleware } = loadFresh('middleware.ts')
  const promises = []
  const event = { waitUntil(promise) { promises.push(promise) } }
  const response = await Promise.race([
    middleware(makeRequest(), event),
    new Promise((_, reject) => setTimeout(() => reject(new Error('middleware waited for background work')), 100)),
  ])

  assert.equal(response.status, 200)
  assert.equal(promises.length, 1)
  await redisStarted
  let backgroundSettled = false
  promises[0].then(() => { backgroundSettled = true })
  releaseRedis(jsonResponse({ result: 1 }))
  await webhookStarted
  assert.equal(backgroundSettled, false)
  releaseWebhook(new Response(null, { status: 204 }))
  await promises[0]
  assert.equal(backgroundSettled, true)
})

test('webhook data keeps the existing visit fields and values', async () => {
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/131.0.0.0'
  const request = makeRequest({
    ip: '203.0.113.4, 10.0.0.1',
    headers: {
      'accept-language': 'en-PH',
      referer: 'https://search.example/?q=portfolio',
      'user-agent': userAgent,
      'x-vercel-cache': 'MISS',
      'x-vercel-id': 'hkg1::abc12',
      'x-vercel-ip-city': 'Quezon%20City',
      'x-vercel-ip-country': 'PH',
      'x-vercel-ip-country-region': 'NCR',
    },
  })
  const { promises } = await runMiddleware(request)
  await Promise.all(promises)

  const webhookCall = fakeRedis.calls.find((call) => call.url === webhookUrl)
  assert.ok(webhookCall)
  const payload = JSON.parse(webhookCall.init.body)
  assert.equal(payload.username, 'Portfolio visits')
  assert.equal(payload.embeds.length, 1)
  const [embed] = payload.embeds
  assert.equal(embed.title, 'GET /about?campaign=spring')
  assert.equal(embed.url, request.url)
  assert.equal(embed.color, 0xbd93f9)
  assert.deepEqual(embed.fields.map(({ name }) => name), [
    'Visitor', 'Device', 'Referrer', 'Language', 'Cache / edge', 'User agent',
  ])
  assert.match(embed.fields[0].value, /^203\.0\.113\.4\n🇵🇭 Quezon City, NCR$/)
  assert.equal(embed.fields[1].value, 'Chrome · Windows')
  assert.equal(embed.fields[2].value, 'https://search.example/?q=portfolio')
  assert.equal(embed.fields[3].value, 'en-PH')
  assert.equal(embed.fields[4].value, 'MISS · hkg1::abc12')
  assert.equal(embed.fields[5].value, userAgent)
  assert.deepEqual(embed.footer, { text: 'Ron Cada portfolio' })
  assert.ok(Number.isFinite(Date.parse(embed.timestamp)))
})

test('existing static, bot, prefetch, RSC, referral, non-HTML, and local filters stay silent', async (t) => {
  const filteredRequests = [
    ['static asset', makeRequest({ url: 'https://portfolio.example/styles/site.css' })],
    ['bot', makeRequest({ headers: { 'user-agent': 'Googlebot/2.1' } })],
    ['prefetch', makeRequest({ headers: { 'next-router-prefetch': '1' } })],
    ['RSC', makeRequest({ headers: { rsc: '1' } })],
    ['same-origin referral', makeRequest({ headers: { referer: 'https://portfolio.example/other' } })],
    ['production referral', makeRequest({ headers: { referer: 'https://ron-cada-portfolio.vercel.app/' } })],
    ['non-HTML request', makeRequest({ headers: { accept: 'application/json', 'sec-fetch-dest': 'empty' } })],
    ['local hostname', makeRequest({ url: 'https://localhost/about' })],
  ]

  for (const [name, request] of filteredRequests) {
    await t.test(name, async () => {
      const { response, promises } = await runMiddleware(request)
      await Promise.all(promises)
      assert.equal(response.status, 200)
      assert.equal(promises.length, 0)
      assert.equal(fakeRedis.redisCalls(), 0)
      assert.equal(fakeRedis.webhookCalls(), 0)
    })
  }
})

test('missing config and a non-HTTPS provider URL fail closed without a network call', async () => {
  const { allowVisitorNotification } = loadFresh('lib/visitor-notification-rate-limit.ts')
  const token = tokenFor('config-check')

  delete process.env.UPSTASH_REDIS_REST_URL
  assert.equal(await allowVisitorNotification(token), false)
  process.env.UPSTASH_REDIS_REST_URL = redisUrl
  delete process.env.UPSTASH_REDIS_REST_TOKEN
  assert.equal(await allowVisitorNotification(token), false)
  process.env.UPSTASH_REDIS_REST_TOKEN = redisToken
  process.env.UPSTASH_REDIS_REST_URL = 'http://redis.example.test/'
  assert.equal(await allowVisitorNotification(token), false)
  assert.equal(fakeRedis.redisCalls(), 0)
})

test('middleware returns a normal page when provider config is missing', async () => {
  delete process.env.UPSTASH_REDIS_REST_URL
  const { response, promises } = await runMiddleware(makeRequest())
  await Promise.all(promises)

  assert.equal(response.status, 200)
  assert.equal(fakeRedis.redisCalls(), 0)
  assert.equal(fakeRedis.webhookCalls(), 0)
})

test('invalid tokens, provider errors, HTTP errors, and malformed responses fail closed', async () => {
  const { allowVisitorNotification } = loadFresh('lib/visitor-notification-rate-limit.ts')
  assert.equal(await allowVisitorNotification('not-a-token'), false)
  assert.equal(fakeRedis.redisCalls(), 0)

  const invalidResponses = [
    () => { throw new Error('provider unavailable') },
    () => new Response('upstream error', { status: 503 }),
    () => new Response('{invalid json', { status: 200 }),
    () => jsonResponse({}),
    () => jsonResponse({ result: '1' }),
    () => jsonResponse({ result: 1, error: 'provider error' }),
  ]

  for (const [index, responseFor] of invalidResponses.entries()) {
    fakeRedis.setRedisBehavior(responseFor)
    assert.equal(await allowVisitorNotification(tokenFor(`bad-provider-${index}`)), false)
  }
  assert.equal(fakeRedis.redisCalls(), invalidResponses.length)
})

test('a Redis timeout aborts the request and fails closed', async () => {
  const { allowVisitorNotification } = loadFresh('lib/visitor-notification-rate-limit.ts')
  const originalTimeout = AbortSignal.timeout
  const timeoutBudgets = []
  AbortSignal.timeout = (milliseconds) => {
    timeoutBudgets.push(milliseconds)
    const controller = new AbortController()
    setTimeout(() => controller.abort(new DOMException('Timed out', 'TimeoutError')), 5)
    return controller.signal
  }
  fakeRedis.setRedisBehavior(({ init }) => new Promise((resolve, reject) => {
    init.signal.addEventListener('abort', () => reject(init.signal.reason), { once: true })
  }))

  try {
    assert.equal(await allowVisitorNotification(tokenFor('timeout-provider')), false)
    assert.equal(fakeRedis.redisCalls(), 1)
    assert.equal(fakeRedis.calls[0].init.signal.aborted, true)
    assert.deepEqual(timeoutBudgets, [1500])
  } finally {
    AbortSignal.timeout = originalTimeout
  }
})

test('middleware returns a normal page and skips Discord when Redis times out', async () => {
  const originalTimeout = AbortSignal.timeout
  const timeoutBudgets = []
  AbortSignal.timeout = (milliseconds) => {
    timeoutBudgets.push(milliseconds)
    const controller = new AbortController()
    setTimeout(() => controller.abort(new DOMException('Timed out', 'TimeoutError')), 5)
    return controller.signal
  }
  fakeRedis.setRedisBehavior(({ init }) => new Promise((resolve, reject) => {
    init.signal.addEventListener('abort', () => reject(init.signal.reason), { once: true })
  }))

  try {
    const { response, promises } = await runMiddleware(makeRequest({ ip: '203.0.113.214' }))
    await Promise.all(promises)
    assert.equal(response.status, 200)
    assert.equal(fakeRedis.redisCalls(), 1)
    assert.equal(fakeRedis.webhookCalls(), 0)
    assert.deepEqual(timeoutBudgets, [1500])
  } finally {
    AbortSignal.timeout = originalTimeout
  }
})

test('webhook rejection and non-success responses do not retry or release the admission budget', async () => {
  const { allowVisitorNotification } = loadFresh('lib/visitor-notification-rate-limit.ts')
  fakeRedis.setWebhookBehavior(() => new Response('webhook unavailable', { status: 500 }))
  const { response, promises } = await runMiddleware(makeRequest({ ip: '203.0.113.211' }))
  await Promise.all(promises)
  assert.equal(response.status, 200)
  assert.equal(fakeRedis.webhookCalls(), 1)

  const repeat = await runMiddleware(makeRequest({ ip: '203.0.113.211' }))
  await Promise.all(repeat.promises)
  assert.equal(repeat.response.status, 200)
  assert.equal(fakeRedis.webhookCalls(), 1)
  assert.equal(fakeRedis.admissions(), 1)

  for (let index = 0; index < 19; index += 1) {
    assert.equal(await allowVisitorNotification(tokenFor(`budget-after-webhook-error-${index}`)), true)
  }
  assert.equal(fakeRedis.admissions(), 20)
  assert.equal(await allowVisitorNotification(tokenFor('budget-after-webhook-cap')), false)
})

test('a rejected webhook promise is swallowed by waitUntil without another send', async () => {
  fakeRedis.setWebhookBehavior(async () => { throw new Error('webhook connection failed') })
  const first = await runMiddleware(makeRequest({ ip: '203.0.113.212' }))
  await Promise.all(first.promises)
  const repeat = await runMiddleware(makeRequest({ ip: '203.0.113.212' }))
  await Promise.all(repeat.promises)

  assert.equal(first.response.status, 200)
  assert.equal(repeat.response.status, 200)
  assert.equal(fakeRedis.webhookCalls(), 1)
})

test('a webhook timeout does not delay the page response or trigger a retry', async () => {
  const originalTimeout = AbortSignal.timeout
  const timeoutBudgets = []
  AbortSignal.timeout = (milliseconds) => {
    timeoutBudgets.push(milliseconds)
    const controller = new AbortController()
    setTimeout(() => controller.abort(new DOMException('Timed out', 'TimeoutError')), 5)
    return controller.signal
  }
  fakeRedis.setWebhookBehavior(({ init }) => new Promise((resolve, reject) => {
    init.signal.addEventListener('abort', () => reject(init.signal.reason), { once: true })
  }))

  try {
    const first = await runMiddleware(makeRequest({ ip: '203.0.113.213' }))
    assert.equal(first.response.status, 200)
    await Promise.all(first.promises)
    assert.equal(fakeRedis.calls.find((call) => call.url === webhookUrl).init.signal.aborted, true)
    assert.deepEqual(timeoutBudgets, [1500, 4000])

    const repeat = await runMiddleware(makeRequest({ ip: '203.0.113.213' }))
    await Promise.all(repeat.promises)
    assert.equal(repeat.response.status, 200)
    assert.equal(fakeRedis.webhookCalls(), 1)
  } finally {
    AbortSignal.timeout = originalTimeout
  }
})
