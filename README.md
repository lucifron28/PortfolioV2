# Ron Cada Portfolio

Evidence-first portfolio for Ron Vincent Cada, a Bachelor of Science in Information Technology student focused on backend and full-stack development.

The Next.js portfolio has separate work, background, awards, and contact routes with server-rendered project case studies. The homepage puts competition recognition before featured projects. The interface uses dark backgrounds, thin borders, and restrained purple accents.

## Local development

Requirements:

- Node.js 20 or newer
- npm 10 or newer

Run npm ci, then npm run dev.

Open http://localhost:3000.

## Visitor notifications

`middleware.ts` posts one Discord embed per external site arrival. In-site navigation, Next.js prefetches, reloads, bots, and non-HTML requests stay silent, so one visit means one notification. Set `DISCORD_WEBHOOK_URL` in `.env.local` for local runs, and add the same variable to the Vercel project environment variables for production. Without the variable the middleware skips reporting silently.

## Validation

Run npm run lint, npx tsc --noEmit, and npm run build.

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
