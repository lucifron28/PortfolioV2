# Ron Cada Portfolio — Design System

This file is the implementation source of truth for the 2026 portfolio refresh.

## Direction

- Recruiter-first Swiss editorial: asymmetric, rational, highly scannable, and visibly technical.
- AIDA sequence: asymmetric hero, screen-led work, technical/proof sections, internship contact panel.
- Satoshi from Fontshare's official CSS API with system fallbacks. Do not commit or redistribute font binaries.
- Single-page structure and factual content remain authoritative.

## Color tokens

| Role | Light | Dark |
| --- | --- | --- |
| Background | `#F5F3EE` | `#0B1020` |
| Surface | `#FCFBF8` | `#121A2B` |
| Foreground | `#101828` | `#F7F8FA` |
| Muted | `#526074` | `#AAB4C5` |
| Accent | `#215CCF` | `#72A7FF` |
| Border | `#D5D9E0` | `#283349` |

The system theme is the default; manual choice persists. Normal text must reach 4.5:1, large text and UI boundaries 3:1.

## Typography and spacing

- Font stack: `Satoshi, ui-sans-serif, system-ui, sans-serif`.
- Display title: `clamp(3rem, 7vw, 6.5rem)`, maximum width `64rem`, line-height `0.94`; use a `2.5rem` optical override below 480px to preserve the required three-line wrap at 375px.
- Section title: `clamp(2.25rem, 5vw, 4.75rem)`, tight editorial tracking.
- Reading copy stays between 60 and 72 characters per line.
- Section rhythm: `clamp(6rem, 11vw, 12rem)`.
- Main container: maximum `90rem`, fluid side gutters.
- Controls have a minimum 44 × 44px target.

## Layout

- Hero is single-column below 1024px and asymmetric split at 1024px and above.
- Featured work uses a 12-column dense grid at desktop:
  - UniPM: 7 columns × 2 rows.
  - Sidekick: 5 columns × 1 row.
  - Enverga Arena: 5 columns × 1 row.
  - StudyLens: 12 columns × 1 row.
- Grid proof: `14 + 5 + 5 + 12 = 36` cells, exactly three complete 12-cell rows.
- Primary project media is authentic UI or a repository-derived workflow diagram. Never use stock or fabricated product screens.
- ScrybeSync and AQuest remain compact archive entries with their authentic screenshots.

## Components

- Header: sticky, active section state, explicit resume action, 44px controls.
- Mobile menu: Escape, outside-click and link dismissal; returns focus to trigger.
- Hero: exactly two calls to action; portrait is editorially cropped. Availability belongs in the final contact panel.
- Project cards: media first, concise summary and stack, repository action, native expandable contribution detail.
- Technical focus: horizontal accordion on desktop, accessible vertical accordion on mobile; Backend opens first.
- Proof carousel: manual controls only; no testimonials and no auto-rotation.
- Selected-work heading contains one decorative inline authentic project crop excluded from the accessibility tree.

## Motion

- Use deferred client-only GSAP with ScrollTrigger.
- About words scrub from opacity `0.1` to `1`.
- Project media scales from `0.8` to `1` on entry, then fades/darkens toward `0.2` on exit.
- Media hover scale: `1.05` over `700ms`; control transitions: `180–240ms`.
- Disable scroll choreography on small screens and for `prefers-reduced-motion`.
- Server-rendered and no-JavaScript content is fully visible and readable.

## Quality gates

- No horizontal overflow at 375×812, 768×1024, 844×390, 1024×768, or 1440×900.
- Hero title remains two to three lines at the acceptance viewports.
- Hash targets clear the sticky header.
- Every interactive element has hover, pressed, focus-visible, and keyboard states.
- Only hero media is eager; below-fold media is lazy with explicit dimensions and responsive sizes.
- Target Lighthouse Performance ≥90 and Accessibility ≥95; LCP <2.5s and CLS <0.1.
