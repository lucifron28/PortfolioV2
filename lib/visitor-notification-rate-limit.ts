export const VISITOR_NOTIFICATION_COOLDOWN_SECONDS = 15 * 60
export const VISITOR_NOTIFICATION_GLOBAL_WINDOW_SECONDS = 15 * 60
export const VISITOR_NOTIFICATION_GLOBAL_MAX_ATTEMPTS = 20
export const VISITOR_NOTIFICATION_REDIS_TIMEOUT_MS = 1500
export const VISITOR_NOTIFICATION_REDIS_KEY_PREFIX = 'portfolio:visitor-notify:v1'

const REDIS_KEY_HASH_TAG = '{visitor-notification}'

export const RATE_LIMIT_SCRIPT = `
local time = redis.call('TIME')
local now_ms = tonumber(time[1]) * 1000 + math.floor(tonumber(time[2]) / 1000)
local window_ms = tonumber(ARGV[2])
local window_start = now_ms - window_ms

if redis.call('EXISTS', KEYS[1]) == 1 then
  return 0
end

redis.call('ZREMRANGEBYSCORE', KEYS[2], '-inf', window_start)
if redis.call('ZCARD', KEYS[2]) >= tonumber(ARGV[4]) then
  return 0
end

redis.call('SET', KEYS[1], '1', 'EX', tonumber(ARGV[3]))
redis.call('ZADD', KEYS[2], now_ms, ARGV[1])
redis.call('EXPIRE', KEYS[2], tonumber(ARGV[3]))
return 1
`.trim()

type RedisConfig = {
  url: string
  token: string
}

function redisConfig(): RedisConfig | null {
  const configuredUrl = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!configuredUrl || !token || token.trim() !== token || /[\r\n]/.test(token)) return null
  if (!/^https:\/\//i.test(configuredUrl)) return null

  try {
    const url = new URL(configuredUrl)
    if (url.protocol !== 'https:' || !url.hostname || url.username || url.password || url.hash) return null
    return { url: url.toString(), token }
  } catch {
    return null
  }
}

export async function allowVisitorNotification(cooldownToken: string): Promise<boolean> {
  if (!/^[a-f0-9]{32}$/.test(cooldownToken)) return false

  const config = redisConfig()
  if (!config) return false

  const perIpKey = `${VISITOR_NOTIFICATION_REDIS_KEY_PREFIX}:${REDIS_KEY_HASH_TAG}:ip:${cooldownToken}`
  const globalKey = `${VISITOR_NOTIFICATION_REDIS_KEY_PREFIX}:${REDIS_KEY_HASH_TAG}:global`

  try {
    const response = await fetch(config.url, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${config.token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify([
        'EVAL',
        RATE_LIMIT_SCRIPT,
        '2',
        perIpKey,
        globalKey,
        cooldownToken,
        String(VISITOR_NOTIFICATION_GLOBAL_WINDOW_SECONDS * 1000),
        String(VISITOR_NOTIFICATION_COOLDOWN_SECONDS),
        String(VISITOR_NOTIFICATION_GLOBAL_MAX_ATTEMPTS),
      ]),
      signal: AbortSignal.timeout(VISITOR_NOTIFICATION_REDIS_TIMEOUT_MS),
      redirect: 'error',
    })
    if (!response.ok) return false

    const payload: unknown = await response.json()
    if (typeof payload !== 'object' || payload === null || Array.isArray(payload)) return false

    const result = payload as { result?: unknown; error?: unknown }
    if ('error' in result) return false
    return result.result === 1
  } catch {
    return false
  }
}
