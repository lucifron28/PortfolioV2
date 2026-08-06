# Ron Cada Portfolio

Recruiter-first portfolio for Ron Vincent Cada, a backend-focused Bachelor of Science in Information Technology student specializing in Web and Mobile Application Development.

The site is a static, single-page Next.js portfolio with server-rendered project case studies. Project claims are checked against the linked repositories and the current CV. The visual system uses a restrained warm-paper and charcoal palette with a system-aware dark theme.

## Local development

Requirements:

- Node.js 20 or newer
- npm 10 or newer

Run npm ci, then npm run dev.

Open http://localhost:3000.

## Validation

Run npm run lint, npx tsc --noEmit, and npm run build.

## Routes

- /
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
