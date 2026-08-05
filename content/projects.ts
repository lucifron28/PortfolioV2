import type { Project } from '@/lib/portfolio-types'

export const selectedProjects: readonly Project[] = [
  {
    id: 'unipm',
    name: 'UniPM',
    type: 'Team capstone',
    role: 'Team capstone contributor',
    summary:
      'A preventive-maintenance system for university assets, schedules, inspections, and maintenance forms.',
    workflow:
      'Tracks assets and schedules, records inspections, and stores maintenance forms and history.',
    contributions: [
      'ASP.NET Core API work covers asset, schedule, inspection, and form lifecycle endpoints with policy-protected writes.',
      'Built repository search with SQL Server Full-Text Search, serialized embeddings, application cosine similarity, and Reciprocal Rank Fusion.',
    ],
    technologies: ['ASP.NET Core', 'React + TypeScript', 'SQL Server', 'JWT', 'Full-Text Search'],
    repository: 'https://github.com/lucifron28/UniPM',
    media: [{ src: '/projects/unipm/cover.svg', alt: 'UniPM workflow from university assets and schedules through inspections and maintenance review', width: 1600, height: 1000, kind: 'diagram' }],
  },
  {
    id: 'sidekick',
    name: 'Sidekick',
    type: 'Team bootcamp capstone',
    role: 'Backend authentication and React delivery',
    summary:
      'A talent marketplace for profiles, skills, gigs, applications, and contracts.',
    workflow:
      'Users create profiles and skills, browse gigs, submit applications, and manage contracts.',
    contributions: [
      'Implemented ASP.NET Core Identity with JWT access tokens and HttpOnly refresh-token rotation.',
      'Built React screens for profiles, skills, gigs, applications, and contracts with PostgreSQL-backed APIs.',
    ],
    technologies: ['ASP.NET Core', 'Identity', 'React', 'PostgreSQL', 'Docker Compose'],
    repository: 'https://github.com/lucifron28/openit-bootcamp-capstone',
    media: [{ src: '/projects/sidekick/cover.svg', alt: 'Sidekick marketplace workflow from profiles and skills through gigs and contracts', width: 1600, height: 1000, kind: 'diagram' }],
  },
  {
    id: 'enverga-arena',
    name: 'Enverga Arena',
    type: 'Solo project',
    role: 'Sole developer',
    summary:
      'An MSEUF intramurals system for tryouts, registrations, results, medal tallies, and administrator-reviewed AI recaps.',
    workflow:
      'Students submit tryout applications and registrations. Authorized users review them, enter results, and publish recaps.',
    contributions: [
      'Built Django REST Framework features for tryouts, registrations, results, medal tallies, and role-based permissions.',
      'Implemented JWT session handling, student-domain OTP verification, hashed OTP storage, rate and duplicate protection, and Turnstile checks.',
      'Added an AI recap review flow so an administrator reviews generated copy before publication.',
    ],
    technologies: ['Django REST Framework', 'React + TypeScript', 'JWT', 'PostgreSQL', 'Cloudflare Turnstile'],
    repository: 'https://github.com/lucifron28/EnvergaArena',
    media: [{ src: '/projects/enverga-arena/cover.svg', alt: 'Enverga Arena workflow from tryouts and registrations through results and reviewed recaps', width: 1600, height: 1000, kind: 'diagram' }],
  },
  {
    id: 'studylens',
    name: 'StudyLens',
    type: 'Solo project',
    role: 'Sole developer',
    summary:
      'A native Android learning companion for course modules, progress tracking, notes, summaries, flashcards, quizzes, and tutor features.',
    workflow:
      'Students read modules, capture classroom boards, edit OCR text, and review generated study materials.',
    contributions: [
      'Built native Android screens with Kotlin, Jetpack Compose, CameraX, ML Kit OCR, and Retrofit.',
      'Connected modules, progress, notes, summaries, flashcards, quizzes, and tutor features to Django REST Framework and PostgreSQL.',
      'Stored AI provider credentials on the server through the backend service layer.',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'CameraX + ML Kit OCR', 'Retrofit', 'Django REST Framework'],
    repository: 'https://github.com/lucifron28/StudyLens',
    media: [{ src: '/projects/studylens/studylens-home.png', alt: 'StudyLens Android home screen showing tasks, recent board-scan activity, and Home, Subjects, Scans, and Profile navigation', width: 720, height: 1608, kind: 'screen' }],
  },
]

export const additionalProjects: readonly Project[] = [
  {
    id: 'scrybe-sync',
    name: 'ScrybeSync',
    type: 'Additional work',
    role: 'Project contributor',
    summary: 'A note-taking project with AI summarization and transcription features.',
    workflow: 'Users capture notes, then generate summaries and transcriptions for review.',
    contributions: [
      'Built a note-taking interface with summarization and transcription features.',
    ],
    technologies: ['React', 'TypeScript', 'AI utilities'],
    repository: 'https://github.com/lucifron28/ScrybeSync',
    media: [{ src: '/ScrybeSync.png', alt: 'ScrybeSync note-taking project interface', width: 1600, height: 900, kind: 'screen' }],
  },
  {
    id: 'aquest',
    name: 'AQuest',
    type: 'Additional work',
    role: 'Codefest project contributor',
    summary: 'Built for the Open iT Codefest 2025.',
    contributions: [],
    technologies: ['React', 'TypeScript', 'Web application'],
    repository: 'https://github.com/lucifron28/AQuest',
    media: [{ src: '/AQuest.png', alt: 'AQuest Codefest project interface', width: 1600, height: 900, kind: 'screen' }],
  },
]
