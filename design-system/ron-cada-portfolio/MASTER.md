# Ron Cada Portfolio - Design System

This file is the implementation source of truth for the corrected 2026 portfolio refresh.

## Direction

- Recruiter-first Swiss editorial: restrained, rational, scannable, and visibly technical.
- Preserve the single-page structure and factual content.
- Use Satoshi from Fontshare's official CSS API with system fallbacks. Do not redistribute font binaries.
- Prefer stable composition and immediate project visibility over theatrical scroll effects.

## Color tokens

| Role | Light | Dark |
| --- | --- | --- |
| Background | `#F5F3EE` | `#0B1020` |
| Surface | `#FCFBF8` | `#121A2B` |
| Foreground | `#101828` | `#F7F8FA` |
| Muted | `#526074` | `#AAB4C5` |
| Accent | `#215CCF` | `#72A7FF` |
| Border | `#D5D9E0` | `#283349` |

Follow the system theme by default and persist manual choice. Normal text must reach 4.5:1; large text and UI boundaries must reach 3:1.

## Typography and spacing

- Font stack: `Satoshi, ui-sans-serif, system-ui, sans-serif`.
- Display title: `clamp(3rem, 6vw, 5.25rem)`, maximum width `50rem`, line-height `0.96`.
- Narrow-phone title: `2.25rem` below 480px to maintain a readable three-line wrap.
- Section title: `clamp(2.25rem, 4.5vw, 4rem)`.
- Reading copy stays near 65 characters per line.
- Section rhythm: `clamp(5rem, 8vw, 8rem)`.
- Main container: maximum `75rem` with fluid gutters.
- Every control has a minimum 44 by 44px target.

## Layout

- Hero is stacked below 1024px and uses a stable copy/portrait split at 1024px and above.
- The portrait never overlaps copy or leaves the container.
- Featured work uses a two-column desktop grid. UniPM and StudyLens span both columns with media/content splits; Sidekick and Enverga Arena occupy one column each.
- Project media uses a stable 16:10 frame and remains fully visible without scroll-based fading.
- Primary project media is authentic UI or a repository-derived workflow diagram. Never use stock or fabricated product screens.
- ScrybeSync and AQuest remain compact archive entries with their authentic screenshots.

## Components

- Header: sticky, active section state, explicit resume action, 44px controls.
- Mobile menu: Escape, outside-click and link dismissal; focus returns to the trigger.
- Hero: exactly two calls to action and a simple bordered portrait card.
- Project cards: media, concise summary and stack, repository action, and native expandable contribution detail.
- Technical focus: horizontal accordion on desktop and accessible vertical accordion on mobile.
- Proof carousel: manual controls only; no testimonials and no auto-rotation.
- Availability and internship details live in the final contact panel.

## Motion

- Do not use scroll scrubbing, pinned sections, image fading, or text opacity choreography.
- Media hover scale is limited to `1.025` over `500ms`.
- Controls transition in `180ms`.
- Respect `prefers-reduced-motion` globally.
- Server-rendered and no-JavaScript content remains fully visible.

## Quality gates

- No horizontal overflow at 375x812, 768x1024, 844x390, 1024x768, or 1440x900.
- Hero title remains two to three lines at the acceptance viewports.
- Hash targets clear the sticky header.
- Every interactive element has hover, pressed, focus-visible, and keyboard states.
- Only hero media is eager; below-fold media is lazy with explicit dimensions and responsive sizes.
- Required routes and the resume must return successful responses with no production console errors.
