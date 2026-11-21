import type { Project } from '@/lib/portfolio-types'

const existingProjects: readonly Project[] = [
  {
    id: 'unipm',
    name: 'UniPM',
    type: 'Team capstone',
    role: 'ASP.NET Core backend contributor',
    summary: 'Asset records, preventive maintenance, acknowledged inspections, offline drafts, and validated maintenance reports.',
    contributions: [
      'Built ASP.NET Core APIs for asset records, QR lookup, schedules, multi-row maintenance forms, and official history.',
      'Implemented report-plan validation and deterministic analytics alongside the maintenance workflows.',
    ],
    technologies: ['ASP.NET Core', 'SQL Server', 'React', 'TypeScript', 'Entity Framework Core', 'Flutter'],
    repository: 'https://github.com/lucifron28/UniPM',
    cardMedia: {
      src: '/projects/unipm/unipm-assets.png',
      alt: 'UniPM asset management interface showing university equipment records, category breakdowns, and maintenance status tracking',
      width: 1440,
      height: 900,
      kind: 'screen',
    },
    caseStudyMedia: [
      {
        src: '/projects/unipm/unipm-assets.png',
        alt: 'UniPM asset management interface showing university equipment records, category breakdowns, and maintenance status tracking',
        width: 1440,
        height: 900,
        kind: 'screen',
        caption: 'Running UniPM asset registry view displaying equipment records, category summaries, and maintenance status tracking.',
      },
      {
        src: '/projects/unipm/cover.svg',
        alt: 'UniPM workflow from assets and schedules through Draft, Submitted, and Acknowledged maintenance forms',
        width: 1600,
        height: 1000,
        kind: 'diagram',
        caption: 'Preventive-maintenance workflow from assets and schedules through Draft, Submitted, and Acknowledged forms.',
      },
    ],
    media: [{ src: '/projects/unipm/unipm-assets.png', alt: 'UniPM asset management interface showing university equipment records, category breakdowns, and maintenance status tracking', width: 1440, height: 900, kind: 'screen' }],
    caseStudy: {
      status: 'Academic capstone MVP, 2026-present',
      scope: 'Asset management, preventive-maintenance scheduling, inspections, digital forms, and official maintenance history.',
      problem: 'Maintenance staff need to track assets, schedule inspections, and keep working forms separate from acknowledged official records.',
      team: 'Team capstone. I built the ASP.NET Core backend workflows; a project partner owns the Flutter mobile client.',
      architecture: [
        'React and TypeScript clients use an ASP.NET Core API backed by SQL Server; the Flutter client handles field workflows.',
        'Policy-protected API paths cover asset records, QR lookup, schedules, inspection rows, whole-form submission, and acknowledgement.',
        'The mobile workflow supports encrypted offline Drafts, queued synchronization, conflict review, and acknowledgement UX.',
      ],
      technicalDecisions: [
        'Draft and Submitted form rows stay outside official history; acknowledgement is the transition that makes eligible inspections official.',
        'Field-work completion determines schedule completion. Acknowledgement records receipt and does not change the execution timestamp.',
        'Natural-language analytics creates a report plan from a supported catalog; the backend validates and executes that plan deterministically.',
        'Optional DeepSeek interpretation is separate from core maintenance operations. Maintenance-history RAG is retired, and AI output cannot make maintenance decisions.',
      ],
      securityAndData: [
        'The API uses JWT access tokens, rotating refresh cookies, and policies for authenticated maintenance operations.',
        'Fictional users and synthetic maintenance records keep the capstone data separate from institutional production data.',
      ],
      reliabilityAndOperations: [
        'The repository includes Entity Framework Core migrations, API health checks, CI, and explicit development-data commands.',
      ],
      testing: ['The repository includes xUnit coverage and CI for API and report workflows. Native SQL Server 2019 and field-device acceptance remain separate checks.'],
      limitations: ['Academic project using fictional development data. Production deployment and formal institutional acceptance remain unverified.', 'Native SQL Server 2019 execution and physical-device acceptance remain pending; report analytics supports only its defined catalog.', 'Corrective follow-up prepares a read-only handoff for manual encoding in the existing Work Management System.'],
      mediaNote: 'Workflow diagram based on the current preventive-maintenance form lifecycle.',
    },
  },
  {
    id: 'sidekick',
    name: 'Sidekick',
    type: 'Team bootcamp capstone',
    role: 'React frontend and environment setup',
    summary: 'A community gig platform where people can post local tasks and browse work opportunities.',
    contributions: [
      'Developed the React frontend and integrated it with the existing authentication flow.',
      'Configured Docker Compose and development environment settings for the client, API, and database.',
      'Reviewed pull requests and worked with teammates on the bootcamp capstone.',
    ],
    technologies: ['React', 'ASP.NET Core', 'PostgreSQL', 'Docker Compose', 'ASP.NET Core Identity'],
    recognition: { label: 'Best in Capstone, Open iT Bootcamp 2026', href: '/credentials#openit-bootcamp' },
    repository: 'https://github.com/lucifron28/openit-bootcamp-capstone',
    cardMedia: {
      src: '/projects/sidekick/sidekick-gigs.png',
      alt: 'Sidekick talent marketplace interface displaying community gig posts, search options, and open listings',
      width: 1440,
      height: 900,
      kind: 'screen',
    },
    caseStudyMedia: [
      {
        src: '/projects/sidekick/sidekick-gigs.png',
        alt: 'Sidekick talent marketplace interface displaying community gig posts, search options, and open listings',
        width: 1440,
        height: 900,
        kind: 'screen',
        caption: 'Running Sidekick community gig browsing interface showing open task listings, poster attribution, and action options.',
      },
      {
        src: '/projects/sidekick/cover.svg',
        alt: 'Sidekick repository-derived marketplace workflow from profiles and skills through gigs and contracts',
        width: 1600,
        height: 1000,
        kind: 'diagram',
        caption: 'Marketplace entity diagram. Application and contract backend endpoints exist, but their frontend workflows remain incomplete.',
      },
    ],
    media: [{ src: '/projects/sidekick/sidekick-gigs.png', alt: 'Sidekick talent marketplace interface displaying community gig posts, search options, and open listings', width: 1440, height: 900, kind: 'screen' }],
    caseStudy: {
      status: 'Bootcamp capstone, 2026',
      scope: 'Community gig browsing and posting, profile and skill interfaces, and a shared local development environment.',
      problem: 'People looking for small local jobs need a place to browse gigs and post tasks. The team needed a React client connected to the existing API and a repeatable local setup.',
      team: 'Team bootcamp capstone. My primary work was React development, integration with existing authentication, Docker Compose and environment configuration, and pull request review.',
      architecture: [
        'A React client communicates with an ASP.NET Core API using an Entity Framework Core data model backed by PostgreSQL.',
        'ASP.NET Core Identity supplies bearer authentication and the repository exposes profile, skill, gig, application, and contract entities.',
        'Docker Compose runs the client, API, and database with a PostgreSQL health check before API startup.',
      ],
      technicalDecisions: ['Integrated the React client with the existing access-token and HttpOnly refresh-cookie flow.', 'Used Axios interceptors and protected routes to connect the interface to authenticated API requests.'],
      securityAndData: ['ASP.NET Core Identity handles authentication and security-stamp validation for the refresh flow.', 'PostgreSQL persists the marketplace and Identity records.'],
      reliabilityAndOperations: ['The Compose setup includes a health-aware dependency for PostgreSQL and a dedicated API health endpoint.'],
      testing: ['The repository documents local setup and current limitations. It does not yet contain automated tests.'],
      limitations: ['Bootcamp capstone intended for local demonstration. No production deployment is claimed.', 'Application and contract endpoints exist, but their frontend workflows are incomplete. Profile editing and persisted social-link editing remain unfinished.', 'Payment, chat, notifications, ratings, and complete resource-ownership checks remain unfinished.'],
      mediaNote: 'Workflow diagram of the marketplace entities implemented in the capstone.',
    },
  },
  {
    id: 'enverga-arena',
    name: 'Enverga Arena',
    type: 'Solo project',
    role: 'Sole developer',
    summary: 'An intramurals system for tryouts, rosters, results, medals, and news.',
    contributions: [
      'Built Django REST Framework tryout, roster, registration, result, medal, and role workflows.',
      'Added domain OTP, hashed OTP storage, server-side Turnstile verification, rate limiting, duplicate protection, and human review for AI recap publication.',
    ],
    technologies: ['Django REST Framework', 'React', 'TypeScript', 'SQLite', 'Cloudflare Turnstile', 'Brevo'],
    repository: 'https://github.com/lucifron28/EnvergaArena',
    cardMedia: {
      src: '/projects/enverga-arena/enverga-arena-dashboard.png',
      alt: 'Enverga Arena sports coordinator admin dashboard showing department KPIs, active events, and registration approval queues',
      width: 1440,
      height: 900,
      kind: 'screen',
    },
    caseStudyMedia: [
      {
        src: '/projects/enverga-arena/enverga-arena-dashboard.png',
        alt: 'Enverga Arena sports coordinator admin dashboard showing department KPIs, active events, and registration approval queues',
        width: 1440,
        height: 900,
        kind: 'screen',
        caption: 'Running Enverga Arena administrator dashboard showing central tournament operations, active events, and registration approval queues.',
      },
      {
        src: '/projects/enverga-arena/cover.svg',
        alt: 'Enverga Arena repository-derived workflow from verified tryouts and registrations through reviewed results and recaps',
        width: 1600,
        height: 1000,
        kind: 'diagram',
        caption: 'Repository-derived intramurals workflow diagram from tryouts and registrations through reviewed results and AI recaps.',
      },
    ],
    media: [{ src: '/projects/enverga-arena/enverga-arena-dashboard.png', alt: 'Enverga Arena sports coordinator admin dashboard showing department KPIs, active events, and registration approval queues', width: 1440, height: 900, kind: 'screen' }],
    caseStudy: {
      status: 'Solo project, 2026',
      scope: 'MSEUF intramurals tryout, team, scheduling, result, medal, news, and reviewed-recap workflows.',
      problem: 'Students, department representatives, and administrators need separate permissions for tryouts, rosters, results, and published recaps.',
      team: 'Solo project. I built the React client, Django API, and role-based workflows.',
      architecture: ['React and TypeScript client with a Django REST Framework API and the current local SQLite database.', 'Tryout, roster, registration, schedule, result, medal, and news workflows are separated by role.'],
      technicalDecisions: ['Student tryouts are verified through the student-domain email and OTP flow before review.', 'AI recap generation creates a draft for administrator review rather than publishing generated text directly.', 'PostgreSQL is a future direction in the repository, not the current local database claim.'],
      securityAndData: ['Access tokens are held in frontend memory and refresh credentials are set by the backend in an HttpOnly cookie.', 'OTP values are hashed, Turnstile is verified server-side, and rate limiting plus duplicate protection cover the public tryout path.'],
      reliabilityAndOperations: ['Role-specific workflows and explicit review states keep official results and recaps under administrator control.'],
      testing: ['I documented the authentication, tryout, roster, result, and recap flows used in the project.'],
      limitations: ['The current project uses SQLite locally. PostgreSQL is documented as a future direction, not a current deployment.', 'AI recap text remains a draft until human review and approval.'],
      mediaNote: 'Workflow diagram of the intramurals roles and publishing steps in the repository.',
    },
  },
  {
    id: 'studylens',
    name: 'StudyLens',
    type: 'Solo Android final project',
    role: 'Sole developer',
    summary: 'A native Android learning companion for modules, notes, board scans, and quizzes.',
    contributions: [
      'Built native Android module, progress, note, OCR, summary, flashcard, quiz, and tutor workflows.',
      'Connected Jetpack Compose to JWT-secured DRF/PostgreSQL services and kept AI credentials behind the backend service layer.',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'CameraX', 'ML Kit OCR', 'Retrofit', 'Django REST Framework'],
    repository: 'https://github.com/lucifron28/StudyLens',
    cardMedia: {
      src: '/projects/studylens/studylens-home.png',
      alt: 'StudyLens Android home screen showing tasks, recent board-scan activity, and Home, Subjects, Scans, and Profile navigation',
      width: 720,
      height: 1608,
      kind: 'screen',
    },
    caseStudyMedia: [
      {
        src: '/projects/studylens/studylens-home.png',
        alt: 'StudyLens Android home screen showing tasks, recent board-scan activity, and Home, Subjects, Scans, and Profile navigation',
        width: 720,
        height: 1608,
        kind: 'screen',
        caption: 'Authentic StudyLens Android application home interface showing task management and recent board-scan activity.',
      },
    ],
    media: [{ src: '/projects/studylens/studylens-home.png', alt: 'StudyLens Android home screen showing tasks, recent board-scan activity, and Home, Subjects, Scans, and Profile navigation', width: 720, height: 1608, kind: 'screen' }],
    caseStudy: {
      status: 'Solo Android final project, 2026',
      scope: 'Native Android learning companion with course content, OCR, progress, study tools, and a server-side AI boundary.',
      problem: 'Students need one mobile workflow for reading course material, capturing classroom boards, and turning reviewed content into study aids without exposing provider credentials in the app.',
      team: 'Solo project. I built the Android client and the supporting API integration.',
      architecture: ['A Kotlin and Jetpack Compose Android client uses CameraX, ML Kit OCR, Retrofit, and local Android storage integrations.', 'The client communicates with a Django REST Framework API backed by PostgreSQL for user-owned course and study records.', 'The backend service layer owns configured AI provider calls and credentials.'],
      technicalDecisions: ['Kept OCR text editable before it becomes a study input.', 'Put AI calls behind the API so the Android app does not hold provider credentials.', 'Scoped records to the authenticated user in the backend query and ownership paths.'],
      securityAndData: ['The API uses JWT authentication and user-scoped records.', 'The Android client communicates with the server boundary for AI-assisted summaries, flashcards, quizzes, and tutor features.'],
      reliabilityAndOperations: ['The repository includes backend API documentation, Docker/PostgreSQL development configuration, and explicit Android/backend module boundaries.'],
      testing: ['The project has separate Android and backend build paths, with API documentation for local development.'],
      limitations: ['The app is a final project and is not published on Google Play.'],
    },
  },
  {
    id: 'ingress',
    name: 'Ingress',
    type: 'Team course project',
    role: 'Backend and platform contributor',
    summary: 'An event ticketing and admission platform designed to keep gate operations working over a venue LAN.',
    contributions: [
      'Built Laravel and PostgreSQL workflows for event management, registration, ticketing, and attendance.',
      'Implemented the separate Event Node runtime and retry-safe synchronization for admission records.',
      'Built Expo staff-scanner flows for pairing, scan review, explicit confirmation, and walk-ins.',
    ],
    technologies: ['Laravel', 'PHP', 'PostgreSQL', 'React Native', 'Expo', 'Firebase Authentication'],
    repository: 'https://github.com/lucifron28/Ingress',
    cardMedia: {
      src: '/projects/ingress/ingress-events.webp',
      alt: 'Ingress organizer event list with three synthetic draft events, schedules, capacities, and status controls',
      width: 1440,
      height: 810,
      kind: 'screen',
      caption: 'Organizer event list from a local run using synthetic draft event data.',
    },
    caseStudyMedia: [
      {
        src: '/projects/ingress/ingress-events.webp',
        alt: 'Ingress organizer event list showing synthetic events, registration windows, capacity, and draft status',
        width: 1440,
        height: 810,
        kind: 'screen',
        caption: 'Local organizer event list using the repository’s labeled demo fixtures.',
      },
      {
        src: '/projects/ingress/ingress-event-overview.webp',
        alt: 'Ingress event overview showing capacity, event setup stages, and links to tickets, gates, staff, and attendance',
        width: 1440,
        height: 810,
        kind: 'screen',
        caption: 'Event overview with capacity and the distinct configure, publish, and admission-preparation steps.',
      },
      {
        src: '/projects/ingress/ingress-attendance.webp',
        alt: 'Ingress attendance screen with movement summaries, access point breakdown, and attendee roster area',
        width: 1440,
        height: 810,
        kind: 'screen',
        caption: 'Attendance view for a synthetic draft event; no real attendees or admissions are shown.',
      },
    ],
    caseStudy: {
      status: 'Team course project, active development',
      scope: 'Cloud event management and ticketing, plus a separate LAN-based admission runtime for event staff.',
      problem: 'Campus events need online registration and ticket management, while gate staff need a local admission authority when public internet is unavailable.',
      team: 'Team course project. My primary contributions cover the Laravel/PostgreSQL backend, the Cloud/Event Node boundary, and staff-scanner workflows.',
      architecture: [
        'The Laravel cloud runtime serves organizer tools, registration, ticketing, and attendance reporting on PostgreSQL.',
        'A separate Event Node imports an event snapshot and signed authority grant, then keeps admission records in its local PostgreSQL database.',
        'The Expo scanner is staff-only and connects to the Event Node over the venue LAN; admission synchronization retries after connectivity returns.',
      ],
      technicalDecisions: [
        'Registration capacity is enforced in database transactions so concurrent requests cannot claim the same final place.',
        'A scan first previews a ticket and attendee; only explicit staff confirmation records an admission or exit.',
        'Client scan IDs make admission requests idempotent, and authenticated batches allow retry-safe synchronization.',
      ],
      securityAndData: [
        'Firebase verifies student email ownership; it does not independently prove enrollment.',
        'Event Node staff credentials and assignments are separate from student and organizer accounts.',
        'The system avoids public-internet dependence during admission, but still requires the local Event Node and venue LAN.',
      ],
      reliabilityAndOperations: [
        'The node retains admission records while disconnected and sends authenticated, idempotent batches after reconnecting.',
        'Snapshot delivery and authority activation remain explicit operator steps.',
      ],
      testing: [
        'The repository includes Laravel feature tests and a separate PostgreSQL concurrency verifier for capacity and admission races.',
        'The local organizer pages were exercised in a browser against a fresh PostgreSQL database seeded only with synthetic draft events.',
      ],
      limitations: [
        'This is a course project, not a production or real-venue deployment. Physical-device, venue-network, and printer checks remain pending.',
        'Real payment-provider integration is not implemented; simulated checkout does not charge money.',
        'Snapshot delivery is manual, and safe authority recovery after a node grant is not implemented.',
      ],
    },
  },
  {
    id: 'provision',
    name: 'Provision',
    type: 'Solo project',
    role: 'Backend and iOS developer',
    summary: 'A household pantry app for inventory, food safety, recipe matching, grocery intake, and shopping review.',
    contributions: [
      'Built FastAPI and PostgreSQL workflows for household-scoped inventory, product intake, food profiles, and recipe matching.',
      'Implemented FEFO stock consumption, label review, and shopping previews that evaluate safety and pantry availability.',
      'Built the SwiftUI client and consent-gated Pip Chat flows with validated recipe cards and review before shopping changes.',
    ],
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'SwiftUI', 'pytest'],
    repository: 'https://github.com/lucifron28/Provision',
    cardMedia: {
      src: '/projects/provision/cook-with-pip-card.webp',
      alt: 'Cook with Pip native iOS screen describing household recipes checked against pantry stock and safety',
      width: 1206,
      height: 678,
      kind: 'screen',
      caption: 'Cropped simulator capture of the Cook with Pip screen from a synthetic UI-test fixture.',
    },
    caseStudyMedia: [
      {
        src: '/projects/provision/cook-with-pip.webp',
        alt: 'Native SwiftUI Cook with Pip screen showing recipe categories and household recipe availability for synthetic data',
        width: 1206,
        height: 2347,
        kind: 'screen',
        caption: 'Simulator capture of the native recipe flow using synthetic household fixture data.',
      },
      {
        src: '/projects/provision/shopping-preview.webp',
        alt: 'Native SwiftUI shopping preview showing servings, food safety status, and pantry ingredient availability before confirmation',
        width: 1206,
        height: 2347,
        kind: 'screen',
        caption: 'Preconfirmation shopping review from the same simulator gallery; inventory changes require a separate confirmation.',
      },
    ],
    caseStudy: {
      status: 'Solo project, backend and native iOS app in active development',
      scope: 'Household pantry inventory, grocery intake, food profiles, recipes, shopping review, and consent-gated Pip Chat.',
      problem: 'A household needs a shared view of what is in stock, what is expiring, and whether recipe ingredients are available and safe for its members.',
      team: 'Solo project. I am building the FastAPI backend and the native SwiftUI application.',
      architecture: [
        'FastAPI and SQLAlchemy expose a PostgreSQL-backed API; the native SwiftUI client calls the API and stores credentials in the iOS Keychain.',
        'Household membership scopes pantry, recipe, and shopping records.',
        'Pip Chat uses household context to return validated recipe cards and can open the existing shopping preview; it cannot directly change pantry data.',
      ],
      technicalDecisions: [
        'Inventory consumption uses FEFO ordering so earlier-expiring stock is consumed first.',
        'Recipe matching separates food-safety evaluation from ingredient availability and asks users to review shopping changes before confirmation.',
        'Chat consent and allergy-sharing consent are separate choices; live provider calls remain server-configured and consent-gated.',
      ],
      securityAndData: [
        'The API uses JWT access tokens and Argon2 password hashing, with household-scoped data access.',
        'The app does not contain provider credentials. Routine CI and staging use deterministic mocks.',
      ],
      reliabilityAndOperations: [
        'The repository includes Alembic migrations, PostgreSQL test configuration, backend CI, and simulator UI workflows.',
        'Screenshots on this page were captured from an automated simulator run with synthetic fixtures; they are visual evidence, not a passing test report.',
      ],
      testing: [
        'The backend has a pytest suite and the iOS project has XCTest and UI-test coverage.',
        'The latest main-branch visual-gallery run produced these simulator captures but failed its full UI-test and required-screenshot verification steps.',
      ],
      limitations: [
        'This Windows environment cannot build or run the native SwiftUI application locally; the screenshots come from GitHub Actions.',
        'Native meal planning, guided cooking, and leftover screens remain on the roadmap; current Home Chef Pip hints are heuristic.',
        'The project is under development and is not presented as a production service.',
      ],
    },
  },
]

const supplementalProjects: readonly Project[] = [
  {
    id: 'scrybe-sync',
    name: 'ScrybeSync',
    type: 'Solo project',
    role: 'Sole developer',
    summary: 'Audio and video transcription, summaries, and personal notes processed by background workers.',
    contributions: [
      'Built the Django REST Framework, Celery, Redis, PostgreSQL, and Docker Compose workflow for asynchronous transcription and summarization.',
      'Kept transcripts, notes, and categories scoped to the authenticated owner in the API views and serializers.',
    ],
    technologies: ['Django REST Framework', 'Celery', 'Redis', 'PostgreSQL', 'Docker Compose', 'Whisper'],
    repository: 'https://github.com/lucifron28/ScrybeSync',
    cardMedia: { src: '/ScrybeSync.png', alt: 'ScrybeSync transcription and personal note interface', width: 1600, height: 900, kind: 'screen' },
    media: [{ src: '/ScrybeSync.png', alt: 'ScrybeSync transcription and personal note interface', width: 1600, height: 900, kind: 'screen' }],
  },
  {
    id: 'aquest',
    name: 'AQuest',
    type: 'Open iT Codefest project',
    role: 'Codefest project contributor',
    summary: 'A team project-management app with tasks, members, statistics, and an AI coach.',
    contributions: [
      'Contributed to project, task, member, statistics, and AI coach workflows in the Codefest application.',
      'Kept achievement functionality labeled as not fully implemented, matching the repository documentation.',
    ],
    technologies: ['SvelteKit', 'Svelte', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Docker Compose'],
    repository: 'https://github.com/lucifron28/AQuest',
    cardMedia: { src: '/AQuest.png', alt: 'AQuest Codefest project-management interface', width: 1600, height: 900, kind: 'screen' },
    media: [{ src: '/AQuest.png', alt: 'AQuest Codefest project-management interface', width: 1600, height: 900, kind: 'screen' }],
  },
]

function requireProject(id: string): Project {
  const project = existingProjects.find((item) => item.id === id)
  if (!project) throw new Error(`Missing project data for ${id}`)
  return project
}

export const selectedProjects: readonly Project[] = [
  requireProject('unipm'),
  requireProject('ingress'),
  requireProject('provision'),
  requireProject('studylens'),
]

export const additionalProjects: readonly Project[] = [
  requireProject('sidekick'),
  requireProject('enverga-arena'),
  ...supplementalProjects,
]

export const allProjects: readonly Project[] = [...selectedProjects, ...additionalProjects]

export function getProjectById(id: string) {
  return allProjects.find((project) => project.id === id)
}
