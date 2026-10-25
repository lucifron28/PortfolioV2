import { NextResponse, type NextFetchEvent, type NextRequest } from 'next/server'
import {
  allowVisitorNotification,
  VISITOR_NOTIFICATION_COOLDOWN_SECONDS as VISIT_COOLDOWN_SECONDS,
} from './lib/visitor-notification-rate-limit'

// Skips Next internals and static assets. Only external document arrivals are
// reported: prefetches, client-side navigations, in-site traffic, bots, and
// non-HTML requests stay silent so one visit means one notification.
const ASSET_PATTERN = /\.(png|jpe?g|gif|svg|webp|avif|ico|css|js|mjs|map|woff2?|ttf|otf|txt|xml|webmanifest)$/i
const SKIP_PATHS = new Set(['/opengraph-image'])
const PRODUCTION_ORIGIN = 'https://ron-cada-portfolio.vercel.app'

const BOT_PATTERN = /bot|crawl|spider|slurp|curl|wget|python-requests|axios|go-http|headless|lighthouse|monitor|uptime/i
const VISIT_COOLDOWN_COOKIE = 'portfolio_visit_cooldown'

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

function visitorIp(request: NextRequest): string | null {
  return firstIp(request.headers.get('x-forwarded-for')) ?? firstIp(request.headers.get('x-real-ip'))
}

async function visitCooldownToken(request: NextRequest): Promise<string> {
  const value = visitorIp(request) ?? 'unknown'
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('').slice(0, 32)
}

function isSelfReferral(referer: string | null, request: NextRequest): boolean {
  if (!referer) return false
  try {
    const origin = new URL(referer).origin
    return origin === new URL(request.url).origin || origin === PRODUCTION_ORIGIN
  } catch {
    return false
  }
}
function isLocalRequest(request: NextRequest): boolean {
  if (process.env.NODE_ENV !== 'production') return true
  const hostname = request.nextUrl.hostname
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1' || hostname.endsWith('.local')
}


function shouldReport(request: NextRequest): boolean {
  if (isLocalRequest(request)) return false
  const pathname = request.nextUrl.pathname
  if (SKIP_PATHS.has(pathname) || ASSET_PATTERN.test(pathname)) return false
  if (request.headers.has('rsc') || request.headers.has('next-router-prefetch')) return false
  const isDocument = request.headers.get('sec-fetch-dest') === 'document' || (request.headers.get('accept') ?? '').includes('text/html')
  if (!isDocument) return false
  if (BOT_PATTERN.test(request.headers.get('user-agent') ?? '')) return false
  if (isSelfReferral(request.headers.get('referer'), request)) return false
  return true
}

async function reportVisit(request: NextRequest, webhookUrl: string) {
  try {
    const userAgent = request.headers.get('user-agent') ?? 'unknown'
    const country = request.headers.get('x-vercel-ip-country')
    const city = decodeHeader(request.headers.get('x-vercel-ip-city'))
    const region = request.headers.get('x-vercel-ip-country-region')
    const geo = [city, region].filter(Boolean).join(', ')
    const visitorLine = [firstIp(request.headers.get('x-forwarded-for')) ?? firstIp(request.headers.get('x-real-ip')) ?? 'unknown IP', [countryFlag(country), geo].filter(Boolean).join(' ')].filter(Boolean).join('\n')

    const embed = {
      title: request.method + ' ' + request.nextUrl.pathname + request.nextUrl.search,
      url: request.url,
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

async function notifyVisitor(request: NextRequest, webhookUrl: string, cooldownToken: string) {
  try {
    if (await allowVisitorNotification(cooldownToken)) {
      await reportVisit(request, webhookUrl)
    }
  } catch {
    // Background failures must never affect the page response.
  }
}

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  const response = NextResponse.next()

  if (webhookUrl && shouldReport(request)) {
    let cooldownToken: string
    try {
      cooldownToken = await visitCooldownToken(request)
    } catch {
      return response
    }
    const isWithinCooldown = request.cookies.get(VISIT_COOLDOWN_COOKIE)?.value === cooldownToken

    if (!isWithinCooldown) {
      response.cookies.set({
        name: VISIT_COOLDOWN_COOKIE,
        value: cooldownToken,
        httpOnly: true,
        secure: request.nextUrl.protocol === 'https:',
        sameSite: 'lax',
        path: '/',
        maxAge: VISIT_COOLDOWN_SECONDS,
      })
      try {
        event.waitUntil(notifyVisitor(request, webhookUrl, cooldownToken))
      } catch {
        // Failure to schedule notifications must never affect the page response.
      }
    }
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico).*)'],
}
