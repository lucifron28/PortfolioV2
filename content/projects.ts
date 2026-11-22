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
      overview: 'UniPM is a web and mobile system for the university\'s General Services Department. It helps staff track equipment, schedule maintenance, complete inspections, and keep maintenance records organized.',
      stack: ['ASP.NET Core', 'SQL Server', 'React', 'Flutter'],
      contribution: 'I worked on the ASP.NET Core backend, including asset management, inspection forms, maintenance workflows, and reporting. My teammate worked on the Flutter mobile app.',
      howItWorks: [
        'Inspection forms move from Draft to Submitted to Acknowledged. Only acknowledged inspections become part of the official maintenance history.',
        'Field-work completion determines schedule completion. Acknowledgement records receipt and does not change the execution timestamp.',
        'The reporting feature lets users ask questions about maintenance and equipment. The backend checks each request against supported reporting rules before calculating the results.',
      ],
      currentStatus: 'Academic capstone. The system has been tested, but regular university deployment has not been confirmed.',
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
      overview: 'Sidekick is a community platform where people can post small jobs and find local gigs.',
      stack: ['React', 'ASP.NET Core', 'PostgreSQL', 'Docker Compose'],
      contribution: 'I worked on the React frontend, including profile pages, skills, and gig listings. I also connected the authentication flow and helped set up Docker Compose for our bootcamp project.',
      howItWorks: [
        'The React app connects to an ASP.NET Core API. ASP.NET Core Identity handles authentication, while PostgreSQL stores user and gig data.',
        'Docker Compose starts the frontend, backend, and database together, making the project easier to run locally.',
      ],
      currentStatus: 'Team capstone for the Open iT Bootcamp, where the project received the Best in Capstone award. Some application and contract features still need frontend work.',
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
      overview: 'Enverga Arena is a web app for university intramurals. Students can apply for tryouts and check event results, while department representatives and organizers can manage teams, schedules, and registrations.',
      stack: ['React', 'Django REST Framework', 'SQLite', 'Cloudflare Turnstile'],
      contribution: 'I worked on the React frontend and Django backend, including student verification, team registration, and admin features.',
      howItWorks: [
        'Students verify their school email through a one-time code before applying for tryouts. Cloudflare Turnstile and rate limits help protect the public forms from automated requests.',
        'The app can also draft sports recaps using AI. An administrator must review a recap before it can be published as news.',
      ],
      currentStatus: 'Solo project. The current local setup uses SQLite.',
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
      projectType: 'Solo Android project',
      overview: 'StudyLens is an Android app that helps students organize course materials, capture whiteboard notes, and create study materials such as summaries, flashcards, and quizzes.',
      stack: ['Kotlin', 'Jetpack Compose', 'ML Kit', 'Django REST Framework'],
      contribution: 'I worked on the Android app using Kotlin and Jetpack Compose, including the OCR note scanner, study tools, and Django API integration.',
      howItWorks: [
        'Google ML Kit reads text from captured images. Students can review the text before using it as study material.',
        'The Django backend manages user data and handles AI requests. This keeps AI provider credentials out of the Android app.',
      ],
      currentStatus: 'Android course project. The app has not been published on Google Play.',
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
      overview: 'Ingress is an event ticketing and admission system. It lets people register for events online while allowing gate staff to scan tickets over a local network, even without an internet connection.',
      stack: ['Laravel', 'PostgreSQL', 'React Native', 'Expo'],
      contribution: 'I worked on the Laravel backend, the separate Cloud and Event Node setup, and the React Native app used by gate staff.',
      howItWorks: [
        'The Cloud handles registrations and tickets. Before an event, an Event Node receives the data it needs to handle admission locally.',
        'Gate staff scan tickets through the mobile app. The Event Node checks each ticket and records the admission after staff confirm it.',
        'PostgreSQL transactions help prevent conflicting registrations and duplicate admissions. When internet access returns, the Event Node sends its admission records back to the Cloud.',
        'The Event Node works without public internet but still needs a local server and the venue LAN.',
      ],
      currentStatus: 'Course project. The main workflows are implemented, but testing at a real venue is still pending.',
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
      caption: 'Cropped simulator capture of the Cook with Pip screen from a synthetic UI-test fixture.',
    },
    caseStudy: {
      projectType: 'Solo project · In development',
      overview: 'Provision is a household pantry app for tracking food, checking expiration dates, finding recipes, and managing shopping lists.',
      stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'SwiftUI'],
      contribution: 'I worked on the FastAPI backend and SwiftUI app, including inventory management, recipe matching, and Cook with Pip.',
      howItWorks: [
        'Provision tracks food in separate batches and uses the earliest-expiring stock first.',
        'Recipe suggestions check which ingredients are available and whether they are suitable for household members. Pip Chat can use household information with the user\'s consent.',
        'The app asks for confirmation before making shopping changes.',
      ],
      currentStatus: 'Still in development. The iOS screenshots come from simulator runs, and physical-device testing has not been established.',
      media: {
        primary: {
          src: '/projects/provision/cook-with-pip-card.webp',
          alt: 'Cook with Pip native iOS screen describing household recipes checked against pantry stock and safety',
          width: 1206,
          height: 678,
          kind: 'screen',
          caption: 'Cropped simulator capture of the Cook with Pip screen from a synthetic UI-test fixture.'
        },
        gallery: [
          {
            src: '/projects/provision/cook-with-pip.webp',
            alt: 'Native SwiftUI Cook with Pip screen showing recipe categories and household recipe availability for synthetic data',
            width: 1206,
            height: 2347,
            kind: 'screen',
            caption: 'Simulator capture of the native recipe flow using synthetic household fixture data.'
          },
          {
            src: '/projects/provision/shopping-preview.webp',
            alt: 'Native SwiftUI shopping preview showing servings, food safety status, and pantry ingredient availability before confirmation',
            width: 1206,
            height: 2347,
            kind: 'screen',
            caption: 'Preconfirmation shopping review from the same simulator gallery; inventory changes require a separate confirmation.'
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
