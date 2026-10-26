# Ron Cada Portfolio

Evidence-first portfolio for Ron Vincent Cada, a Bachelor of Science in Information Technology student focused on full-stack development, with a particular interest in backend systems.

The Next.js portfolio has separate projects, about, awards, and contact routes with server-rendered project case studies. The homepage puts competition recognition before featured projects. The interface uses dark backgrounds, thin borders, and Dracula accent colors.

## Local development

Requirements:

- Node.js 20 or newer
- npm 10 or newer

Run npm ci, then npm run dev.

Open http://localhost:3000.

## Visitor notifications

`middleware.ts` reports eligible external HTML arrivals to Discord. The existing filters still skip local development, static assets, bots, prefetches, client-side navigation, and self-referrals. Visitor fields and Discord embed contents are unchanged.

Notifications require all three server-only variables in `.env.example`:

| Variable | Value |
| --- | --- |
| `DISCORD_WEBHOOK_URL` | Existing Discord webhook URL |
| `UPSTASH_REDIS_REST_URL` | Redis database HTTPS REST endpoint |
| `UPSTASH_REDIS_REST_TOKEN` | Redis REST token with permission to execute the limiter script |

The limiter uses native `fetch` and adds no dependencies. One Redis Lua `EVAL` atomically reserves a notification attempt only when both limits allow it:

- At most one attempt per IP address every 900 seconds, including requests without cookies.
- At most 20 attempts across all IP addresses in a rolling 900-second window.

Redis supplies the clock. The script stores the existing hashed IP token with a 900-second expiry and keeps admitted attempts in a bounded sorted set. Denied requests do not extend the per-IP cooldown or consume global slots. Cookies remain an optimization; every attempt that passes the cookie check must also pass Redis. A failed or timed-out webhook still consumes its reservation and is not retried.

`NextFetchEvent.waitUntil()` runs the Redis check and webhook delivery in the background. Redis requests have a 1.5-second timeout and webhook requests retain their 4-second timeout. Missing configuration, Redis errors, unexpected responses, and timeouts skip the notification. The portfolio response continues normally, without a rate-limit error page or an unrestricted fallback. The browser cooldown cookie can still suppress another attempt for 15 minutes after a skipped notification.

### Vercel configuration

1. Reuse an existing Upstash-compatible Redis REST database if available, or provision one through the Vercel Marketplace or Upstash. No database is provisioned by this repository.
2. Add the two Redis variables to the Vercel project's Production environment alongside the existing webhook variable. Keep them server-only; do not use a `NEXT_PUBLIC_` prefix or commit credentials.
3. Use the same persistent database and credentials for every production deployment and region. Keep eviction disabled and retain the `portfolio:visitor-notify:v1` key namespace. Clearing the database, evicting limiter keys, or switching databases resets the limits. Use a separate database for previews unless they should share the production notification budget.
4. Redeploy after setting the variables. Until configuration is complete, this implementation sends no notifications. Updating the code alone does not enable live protection on the current deployment.

The Redis token must allow `EVAL` and the script's `TIME`, `EXISTS`, `ZREMRANGEBYSCORE`, `ZCARD`, `SET`, `ZADD`, and `EXPIRE` commands. The database must support atomic Lua execution. The IP bucket uses the existing forwarded-IP extraction; Vercel must remain the trusted ingress. Review that trust boundary before adding another proxy or hosting elsewhere.

References: [Next.js 15 middleware background work](https://nextjs.org/docs/15/app/api-reference/file-conventions/middleware#waituntil-and-nextfetchevent), [Redis REST commands](https://upstash.com/docs/redis/features/restapi), and [Vercel forwarded-IP headers](https://vercel.com/docs/headers/request-headers#x-forwarded-for).

## Validation

Run `npm run lint`, `npx tsc --noEmit`, `npm test`, and `npm run build`.

`npm test` intercepts outbound requests and checks middleware behavior with a simulated Redis provider. It never contacts Discord. To test the exported Lua script against Redis itself, start a dedicated local Redis server and run:

```powershell
$env:REDIS_TEST_URL = 'redis://127.0.0.1:6379'
npm run test:redis
```

The Redis suite uses random test-only keys and deletes only those keys afterward. It checks concurrent admissions, the global cap, expiry, and rolling-window pruning. Without `REDIS_TEST_URL`, this optional suite reports a skip. CI supplies a Redis service and runs both suites.

## Routes

- /
- /portfolio
- /about
- /credentials
- /contact
- /work/unipm
- /work/sidekick
- /work/enverga-arena
- /work/studylens
- /Ron_Vincent_Cada_CV.pdf

/Cada_CV.pdf redirects to the current résumé filename for compatibility.

## Content and structure

- content/portfolio.ts contains site, education, credentials, technical-focus, and availability content.
- content/projects.ts contains verified project summaries and case-study evidence.
- components/case-study-layout.tsx renders the shared case-study page.
- app/work/[slug]/page.tsx generates static project routes.
- public/projects/ contains authentic screens and repository-derived diagrams. Missing running-app captures are called out in the relevant case study.
