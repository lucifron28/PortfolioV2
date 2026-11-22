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
    media: [{ src: '/projects/unipm/unipm-assets.png', alt: 'UniPM asset management interface showing university equipment records, category breakdowns, and maintenance status tracking', width: 1440, height: 900, kind: 'screen' }],
    caseStudy: {
      media: {
        primary: {
          src: '/projects/unipm/unipm-assets.png',
          alt: 'UniPM asset management interface showing university equipment records, category breakdowns, and maintenance status tracking',
          width: 1440,
          height: 900,
          kind: 'screen',
          caption: 'Running UniPM asset registry view displaying equipment records, category summaries, and maintenance status tracking.'
        },
      },
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
    media: [{ src: '/projects/sidekick/sidekick-gigs.png', alt: 'Sidekick talent marketplace interface displaying community gig posts, search options, and open listings', width: 1440, height: 900, kind: 'screen' }],
    caseStudy: {
      media: {
        primary: {
          src: '/projects/sidekick/sidekick-gigs.png',
          alt: 'Sidekick talent marketplace interface displaying community gig posts, search options, and open listings',
          width: 1440,
          height: 900,
          kind: 'screen',
          caption: 'Running Sidekick community gig browsing interface showing open task listings, poster attribution, and action options.'
        },
      },
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
    media: [{ src: '/projects/enverga-arena/enverga-arena-dashboard.png', alt: 'Enverga Arena sports coordinator admin dashboard showing department KPIs, active events, and registration approval queues', width: 1440, height: 900, kind: 'screen' }],
    caseStudy: {
      media: {
        primary: {
          src: '/projects/enverga-arena/enverga-arena-dashboard.png',
          alt: 'Enverga Arena sports coordinator admin dashboard showing department KPIs, active events, and registration approval queues',
          width: 1440,
          height: 900,
          kind: 'screen',
          caption: 'Running Enverga Arena administrator dashboard showing central tournament operations, active events, and registration approval queues.'
        },
      },
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
    media: [{ src: '/projects/studylens/studylens-home.png', alt: 'StudyLens Android home screen showing tasks, recent board-scan activity, and Home, Subjects, Scans, and Profile navigation', width: 720, height: 1608, kind: 'screen' }],
    caseStudy: {
      media: {
        primary: {
          src: '/projects/studylens/studylens-home.png',
          alt: 'StudyLens Android home screen showing tasks, recent board-scan activity, and Home, Subjects, Scans, and Profile navigation',
          width: 720,
          height: 1608,
          kind: 'screen',
          caption: 'Authentic StudyLens Android application home interface showing task management and recent board-scan activity.'
        },
      },
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
    caseStudy: {
      media: {
        primary: {
          src: '/projects/ingress/ingress-events.webp',
          alt: 'Ingress organizer event list showing synthetic events, registration windows, capacity, and draft status',
          width: 1440,
          height: 810,
          kind: 'screen',
          caption: 'Local organizer event list using the repository’s labeled demo fixtures.'
        },
        gallery: [
          {
            src: '/projects/ingress/ingress-event-overview.webp',
            alt: 'Ingress event overview showing capacity, event setup stages, and links to tickets, gates, staff, and attendance',
            width: 1440,
            height: 810,
            kind: 'screen',
            caption: 'Event overview with capacity and the distinct configure, publish, and admission-preparation steps.'
          },
          {
            src: '/projects/ingress/ingress-attendance.webp',
            alt: 'Ingress attendance screen with movement summaries, access point breakdown, and attendee roster area',
            width: 1440,
            height: 810,
            kind: 'screen',
            caption: 'Attendance view for a synthetic draft event; no real attendees or admissions are shown.'
          },
        ],
      },
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
      caption: 'Cook with Pip recipe screen.',
    },
    caseStudy: {
      media: {
        primary: {
          src: '/projects/provision/cook-with-pip.webp',
          alt: 'Cook with Pip screen showing recipe categories and pantry availability',
          width: 1206,
          height: 2347,
          kind: 'screen',
          caption: 'Cook with Pip recipe screen.'
        },
        gallery: [
          {
            src: '/projects/provision/shopping-preview.webp',
            alt: 'Native SwiftUI shopping preview showing servings, food safety status, and pantry ingredient availability before confirmation',
            width: 1206,
            height: 2347,
            kind: 'screen',
            caption: 'Shopping preview before confirmation.'
          },
        ],
      },
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

export const caseStudyProjects: readonly Project[] = [
  requireProject('unipm'),
  requireProject('ingress'),
  requireProject('sidekick'),
  requireProject('enverga-arena'),
  requireProject('studylens'),
  requireProject('provision'),
]

export function getProjectById(id: string) {
  return allProjects.find((project) => project.id === id)
}
