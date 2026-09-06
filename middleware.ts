import { NextResponse, type NextRequest } from 'next/server'

// Vercel's request context keeps background promises alive after the response
// is returned from middleware. Falls back to plain execution outside Vercel.
const REQUEST_CONTEXT = Symbol.for('@vercel/request-context')

function runInBackground(promise: Promise<unknown>) {
  const context = (globalThis as unknown as Record<symbol, { get?: () => { waitUntil?: (p: Promise<unknown>) => void } } | undefined>)[REQUEST_CONTEXT]?.get?.()
  context?.waitUntil?.(promise)
}

// Skips Next internals and static binaries; .pdf stays included so CV
// downloads are reported as visits.
const ASSET_PATTERN = /\.(png|jpe?g|gif|svg|webp|avif|ico|css|js|mjs|map|woff2?|ttf|otf|txt|xml|webmanifest)$/i
const SKIP_PATHS = new Set(['/opengraph-image'])

const BOT_PATTERN = /bot|crawl|spider|slurp|curl|wget|python-requests|axios|go-http|headless|lighthouse|monitor|uptime/i

function parseUserAgent(ua: string): string {
  if (BOT_PATTERN.test(ua)) return '🤖 Bot'
  const browser = /edg(?:e|a|ios)?\//i.test(ua)
    ? 'Edge'
    : /opr\/|opera/i.test(ua)
      ? 'Opera'
      : /samsungbrowser/i.test(ua)
        ? 'Samsung Internet'
        : /chrome|crios/i.test(ua)
          ? 'Chrome'
          : /firefox|fxios/i.test(ua)
            ? 'Firefox'
            : /curl|wget|postman/i.test(ua)
              ? 'HTTP client'
              : /safari/i.test(ua)
                ? 'Safari'
                : 'Unknown browser'
  const os = /windows/i.test(ua)
    ? 'Windows'
    : /android/i.test(ua)
      ? 'Android'
      : /iphone|ipad|ipod/i.test(ua)
        ? 'iOS'
        : /mac os x|macintosh/i.test(ua)
          ? 'macOS'
          : /linux/i.test(ua)
            ? 'Linux'
            : 'Unknown OS'
  return browser + ' · ' + os
}

function countryFlag(code: string | null): string {
  if (!code || code.length !== 2 || !/^[a-z]{2}$/i.test(code)) return '🌐'
  return String.fromCodePoint(...[...code.toUpperCase()].map((letter) => 127397 + letter.charCodeAt(0)))
}

function decodeHeader(value: string | null): string | null {
  if (!value) return null
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

function firstIp(header: string | null): string | null {
  if (!header) return null
  return header.split(',')[0].trim() || null
}

async function reportVisit(request: NextRequest, webhookUrl: string) {
  try {
    const userAgent = request.headers.get('user-agent') ?? 'unknown'
    const isBot = BOT_PATTERN.test(userAgent)
    const country = request.headers.get('x-vercel-ip-country')
    const city = decodeHeader(request.headers.get('x-vercel-ip-city'))
    const region = request.headers.get('x-vercel-ip-country-region')
    const geo = [city, region].filter(Boolean).join(', ')
    const visitorLine = [firstIp(request.headers.get('x-forwarded-for')) ?? firstIp(request.headers.get('x-real-ip')) ?? 'unknown IP', [countryFlag(country), geo].filter(Boolean).join(' ')].filter(Boolean).join('\n')

    const embed = {
      title: request.method + ' ' + request.nextUrl.pathname + request.nextUrl.search,
      url: request.url,
      description: isBot ? '🤖 Automated client' : undefined,
      color: 0xbd93f9,
      fields: [
        { name: 'Visitor', value: visitorLine, inline: true },
        { name: 'Device', value: parseUserAgent(userAgent), inline: true },
        { name: 'Referrer', value: request.headers.get('referer') ?? 'direct', inline: true },
        { name: 'Language', value: request.headers.get('accept-language') ?? 'unknown', inline: true },
        { name: 'Cache / edge', value: [request.headers.get('x-vercel-cache') ?? 'unknown', request.headers.get('x-vercel-id') ?? 'unknown edge'].join(' · '), inline: true },
        { name: 'User agent', value: userAgent.slice(0, 300) },
      ].filter((field) => field.value),
      footer: { text: 'Ron Cada portfolio' },
      timestamp: new Date().toISOString(),
    }

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      signal: AbortSignal.timeout(4000),
      body: JSON.stringify({
        username: 'Portfolio visits',
        embeds: [embed],
      }),
    })
  } catch {
    // A dropped webhook must never break a page request.
  }
}

export function middleware(request: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  const pathname = request.nextUrl.pathname

  if (webhookUrl && !SKIP_PATHS.has(pathname) && !ASSET_PATTERN.test(pathname)) {
    runInBackground(reportVisit(request, webhookUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico).*)'],
}
