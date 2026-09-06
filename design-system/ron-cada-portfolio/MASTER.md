# Ron Cada portfolio design system

## Direction

A multi-page developer portfolio built for a quick recruiter scan. The left profile card remains stable while routes replace the content inside the right card. Dracula's editor palette is limited to type, icons, links, and interaction states.

Design dials:

- Design variance: 5/10
- Motion intensity: 3/10
- Visual density: 3/10

## Palette

The site keeps its black background and uses Dracula's colors for foreground accents:

- Paper: #09090B
- Surface: #101014
- Ink: #F8F8F2
- Muted ink: #B7BDD5
- Border: #30303A
- Purple: #BD93F9
- Cyan: #8BE9FD
- Green: #50FA7B
- Pink: #FF79C6
- Orange: #FFB86C

No neon gradients, glass panels, particles, stars, or decorative tech-logo walls.

## Type

Use Space Grotesk when installed, with Segoe UI as the build-safe fallback. JetBrains Mono is reserved for short technical labels, metadata, and stack lists. No external font request or font binary is required.

Type scale is constrained by the right-card width: 11px technical labels, 13px metadata, 14px project summaries, 16px body copy, 20px compact headings, 32px route headings, and no more than 84px for deep project titles. Contact and case-study headings use a separate card-safe cap instead of inheriting full-viewport hero sizes.

## Layout

- The left profile card keeps Ron's portrait, name, contact details, social links, and résumé action. It stays beside the right card on desktop and stacks above it on smaller screens.
- Ron's portrait stays in full color. Dracula purple is limited to its border.
- The header sits inside the right card and links to Home, Work, About, Awards, Contact, CV, and GitHub.
- Route changes replace only the right card's content. The profile card remains unchanged.
- The home page contains a concise introduction, availability line, two CTAs, and three facts. The full project list lives at `/portfolio`.
- About and technical focus live at `/about`. Awards and training live at `/credentials`. Internship details live at `/contact`.
- The about route leads with a declarative heading, a current-work facts block, and closes with onward links to `/portfolio` and `/credentials`.
- Contact uses an availability sheet: a factual internship heading, structured start date, hours, locations, and work setup, followed by one direct email row and secondary LinkedIn/CV actions.
- Selected work uses two compact columns inside the 900px right card on desktop. Tablet cards switch to horizontal media-and-copy rows, and phone cards stack. Repository diagrams always use `object-fit: contain` so their labels are never cropped.
- Overview cards stay scannable with the project, role, summary, stack, and links. Workflow and contribution detail lives on the linked case-study routes.
- Additional work uses compact rows.
- Technical focus groups tools by the work they support. Panel lists stay visible on every screen size.
- Case studies are server-rendered and linkable at /work/[slug].
- Awards and education appear once. The home page has no duplicate proof strip or generic process section.

## Interaction

Only the mobile navigation and standard links require client-side behavior. The mobile menu supports Escape, outside-pointer dismissal, link dismissal, aria-expanded, and focus return. Project evidence is visible in cards; deeper detail is a normal route instead of a modal.

Motion is limited to 180-240ms control transitions and a 700ms image hover scale. Reduced-motion preferences remove scroll behavior and transitions.

## Content rules

Project claims come from repository code, repository documentation, and the current CV. The copy names what Ron built and states current limits directly. It does not include reviewer notes, unsupported deployment claims, or invented metrics.

Route sections use short uppercase eyebrows. Project metadata uses sentence case. Repository diagrams use direct titles, real entity names, and short factual notes. The visual reference is a structural influence only. No reference copy, branding, or assets are reused.
