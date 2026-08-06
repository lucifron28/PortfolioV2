# Ron Cada Portfolio Design System

## Direction

Recruiter-first Swiss editorial. The interface should feel like a technical notebook with strong hierarchy, visible evidence, and restrained contrast. The page is approximately 70% editorial orientation, 25% project case studies, and 5% personal context.

Design dials:

- Design variance: 5/10
- Motion intensity: 2/10
- Visual density: 4/10

## Palette

Light mode uses warm paper and charcoal:

- Paper: #F5F3EE
- Surface: #FFFEFA
- Ink: #151515
- Muted ink: #5D605E
- Border: #858782
- Strong surface: #E8E6DF

Dark mode uses near-black surfaces:

- Paper: #0D0D0D
- Surface: #161616
- Ink: #F3F3EE
- Muted ink: #A6A6A0
- Border: #666762
- Strong surface: #1C1C1A

No neon gradients, glass panels, particles, stars, or decorative tech-logo walls.

## Type

Use the system sans stack: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif. No external font stylesheet or font binaries are required. Display text uses tight tracking, balanced wrapping, and content-driven line lengths.

## Layout

- Sticky header with 44px controls and a concise résumé action.
- Hero stays content-driven and stacks the portrait below the copy until 1024px.
- Selected work uses a two-column editorial grid at desktop: UniPM gets a full-width split evidence row, Sidekick and Enverga Arena share the next row, and StudyLens gets a full-width split row.
- Overview cards stay scannable with the project, role, summary, stack, and links. Workflow and contribution detail lives on the linked case-study routes.
- Additional work uses compact rows.
- Technical focus is a static four-group grid, not a click-to-expand accordion.
- Case studies are server-rendered and linkable at /work/[slug].

## Interaction

Only the theme toggle, mobile navigation, and standard links require client-side behavior. The mobile menu supports Escape, outside-pointer dismissal, link dismissal, aria-expanded, and focus return. Project evidence is visible in cards; deeper detail is a normal route instead of a modal.

Motion is limited to 180–240ms control transitions and a 700ms image hover scale. Reduced-motion preferences remove scroll behavior and transitions.

## Content rules

Project claims are grounded in repository code, repository documentation, and the current CV. Unsupported deployment, scale, reliability, security, AI, and role claims are excluded. Missing screenshots are reported rather than replaced with fabricated product screens.
