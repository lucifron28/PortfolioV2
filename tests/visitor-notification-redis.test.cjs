/* eslint-env node */
/* eslint-disable @typescript-eslint/no-require-imports */

const assert = require('node:assert/strict')
const net = require('node:net')
const { randomUUID } = require('node:crypto')
const { test } = require('node:test')
require('./register-typescript.cjs')

const {
  RATE_LIMIT_SCRIPT,
  VISITOR_NOTIFICATION_COOLDOWN_SECONDS,
  VISITOR_NOTIFICATION_GLOBAL_MAX_ATTEMPTS,
  VISITOR_NOTIFICATION_GLOBAL_WINDOW_SECONDS,
} = require('../lib/visitor-notification-rate-limit.ts')

const redisTestUrl = process.env.REDIS_TEST_URL
const skipReason = redisTestUrl ? false : 'Set REDIS_TEST_URL to run against a real Redis server.'

test('the exported rate limit Lua script behaves atomically on real Redis', { skip: skipReason }, async (t) => {
  const redis = createRedisConnection(redisTestUrl)

  await t.test('64 simultaneous requests for one IP admit one and set a 900-second TTL', async () => {
    await withTestKeys(redis, async ({ allow, ipKey, globalKey, token, command }) => {
      const visitor = token()
      const results = await Promise.all(Array.from({ length: 64 }, () => allow(visitor)))
      assert.equal(results.filter(Boolean).length, 1)
      assert.equal(Number(await command(['ZCARD', globalKey])), 1)
      const ttl = Number(await command(['TTL', ipKey(visitor)]))
      assert.ok(ttl >= VISITOR_NOTIFICATION_COOLDOWN_SECONDS - 5 && ttl <= VISITOR_NOTIFICATION_COOLDOWN_SECONDS)
    })
  })

  await t.test('80 distinct IPs share the 20-admission global cap', async () => {
    await withTestKeys(redis, async ({ allow, ipKey, globalKey, token, command }) => {
      const tokens = Array.from({ length: 80 }, () => token())
      const results = await Promise.all(tokens.map((value) => allow(value)))
      assert.equal(results.filter(Boolean).length, VISITOR_NOTIFICATION_GLOBAL_MAX_ATTEMPTS)
      assert.equal(Number(await command(['ZCARD', globalKey])), VISITOR_NOTIFICATION_GLOBAL_MAX_ATTEMPTS)

      const deniedToken = token()
      assert.equal(await allow(deniedToken), false)
      assert.equal(Number(await command(['EXISTS', ipKey(deniedToken)])), 0)
    })
  })

  await t.test('a one-second per-IP cooldown expires', async () => {
    await withTestKeys(redis, async ({ allow, token }) => {
      const visitor = token()
      assert.equal(await allow(visitor, { windowMs: 60_000, cooldownSeconds: 1 }), true)
      await delay(1100)
      assert.equal(await allow(visitor, { windowMs: 60_000, cooldownSeconds: 1 }), true)
    })
  })

  await t.test('a one-second rolling window prunes an old score while the sorted set remains alive', async () => {
    await withTestKeys(redis, async ({ allow, token, globalKey, command }) => {
      assert.equal(await allow(token(), { windowMs: 1000, cooldownSeconds: 60, maxAttempts: 1 }), true)
      assert.equal(Number(await command(['ZCARD', globalKey])), 1)
      await delay(1100)
      assert.equal(await allow(token(), { windowMs: 1000, cooldownSeconds: 60, maxAttempts: 1 }), true)
      assert.equal(Number(await command(['ZCARD', globalKey])), 1)
    })
  })

  assert.equal(VISITOR_NOTIFICATION_GLOBAL_WINDOW_SECONDS, 900)
})

async function withTestKeys(redis, run) {
  const hashTag = `{notification-test-${randomUUID()}}`
  const prefix = `portfolio:visitor-notify:test:${hashTag}`
  const globalKey = `${prefix}:global`
  const createdKeys = new Set()
  const token = () => randomUUID().replaceAll('-', '').slice(0, 32)
  const ipKey = (value) => `${prefix}:ip:${value}`

  async function allow(value, {
    windowMs = VISITOR_NOTIFICATION_GLOBAL_WINDOW_SECONDS * 1000,
    cooldownSeconds = VISITOR_NOTIFICATION_COOLDOWN_SECONDS,
    maxAttempts = VISITOR_NOTIFICATION_GLOBAL_MAX_ATTEMPTS,
  } = {}) {
    const perIpKey = ipKey(value)
    const result = await redis.command([
      'EVAL',
      RATE_LIMIT_SCRIPT,
      '2',
      perIpKey,
      globalKey,
      value,
      String(windowMs),
      String(cooldownSeconds),
      String(maxAttempts),
    ])
    if (result === 1) {
      createdKeys.add(perIpKey)
      createdKeys.add(globalKey)
    }
    return result === 1
  }

  try {
    return await run({ allow, command: redis.command, globalKey, ipKey, token })
  } finally {
    if (createdKeys.size > 0) await redis.command(['DEL', ...createdKeys])
  }
}

function createRedisConnection(connectionUrl) {
  const url = new URL(connectionUrl)
  const host = url.hostname.replace(/^\[|\]$/g, '')
  const port = Number(url.port)
  if (
    url.protocol !== 'redis:' ||
    !['localhost', '127.0.0.1', '::1'].includes(host) ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    (url.pathname !== '' && url.pathname !== '/') ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535
  ) {
    throw new Error('REDIS_TEST_URL must be a local redis://host:port URL without credentials or a database path.')
  }

  return {
    command: (command) => sendCommand(host, port, command),
  }
}

function sendCommand(host, port, command) {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection({ host, port })
    let buffer = Buffer.alloc(0)
    let settled = false
    const timeout = setTimeout(() => finish(new Error('Redis test command timed out.')), 5000)

    const finish = (error, value) => {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      if (error) {
        socket.destroy()
        reject(error)
      } else {
        socket.end()
        resolve(value)
      }
    }

    socket.on('connect', () => {
      socket.write(encodeCommand(command))
    })
    socket.on('data', (chunk) => {
      buffer = Buffer.concat([buffer, chunk])
      const lineEnd = buffer.indexOf('\r\n')
      if (lineEnd < 0) return

      const marker = String.fromCharCode(buffer[0])
      const response = buffer.toString('utf8', 1, lineEnd)
      if (marker === '-') {
        finish(new Error('Redis rejected a test command.'))
        return
      }
      if (marker !== ':' || !/^-?\d+$/.test(response)) {
        finish(new Error('Redis returned a non-integer test response.'))
        return
      }
      finish(null, Number(response))
    })
    socket.on('error', (error) => finish(error))
    socket.on('close', () => {
      if (!settled) finish(new Error('Redis closed the test connection before replying.'))
    })
  })
}

function encodeCommand(parts) {
  const buffers = [Buffer.from(`*${parts.length}\r\n`)]
  for (const part of parts) {
    const value = Buffer.from(String(part))
    buffers.push(Buffer.from(`$${value.length}\r\n`), value, Buffer.from('\r\n'))
  }
  return Buffer.concat(buffers)
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}
