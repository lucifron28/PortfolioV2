import type { Project } from '@/lib/portfolio-types'

export const selectedProjects: readonly Project[] = [
  {
    id: 'unipm',
    name: 'UniPM',
    type: 'Team capstone',
    role: 'Team capstone contributor',
    summary:
      'A preventive-maintenance workflow system for university assets, schedules, inspections, and maintenance forms.',
    workflow:
      'Asset and schedule management, inspection records, multi-row preventive-maintenance forms, and bounded maintenance-history review.',
    contributions: [
      'ASP.NET Core API work covers asset, schedule, inspection, and form lifecycle endpoints with policy-protected writes.',
      'Repository retrieval work combines SQL Server Full-Text Search, serialized embeddings, application cosine similarity, and inspectable Reciprocal Rank Fusion.',
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
      'A talent marketplace for profiles, skills, gigs, applications, contracts, and related handoffs.',
    workflow:
      'Profile and skill setup flows into gig discovery, applications, and contract management.',
    contributions: [
      'Implemented ASP.NET Core Identity with JWT access tokens and HttpOnly refresh-token rotation.',
      'Owned React delivery for profile, skill, gig, application, and contract workflows backed by PostgreSQL.',
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
      'An intramurals registration, results, medal-tally, and reviewed AI news-recap system for MSEUF.',
    workflow:
      'Student tryout applications and registrations move through role-scoped review, results entry, and admin-controlled publication.',
    contributions: [
      'Built Django REST Framework workflows for tryouts, registrations, results, medal tallies, and role-based operations.',
      'Implemented JWT session handling, student-domain OTP verification, hashed OTP storage, rate and duplicate protection, and Turnstile checks.',
      'Added an AI recap review flow so generated copy is checked by an administrator before publication.',
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
      'A native Android learning companion for course modules, progress, notes, summaries, flashcards, quizzes, and tutor workflows.',
    workflow:
      'Students read modules, capture classroom board notes, edit OCR output, and review generated learning materials.',
    contributions: [
      'Built native Android screens with Kotlin, Jetpack Compose, CameraX, ML Kit OCR, and Retrofit.',
      'Connected module, progress, note, summary, flashcard, quiz, and tutor workflows to Django REST Framework and PostgreSQL services.',
      'Kept AI provider credentials on the server through the backend service layer.',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'CameraX + ML Kit OCR', 'Retrofit', 'Django REST Framework'],
    repository: 'https://github.com/lucifron28/StudyLens',
    media: [{ src: '/projects/studylens/cover.svg', alt: 'StudyLens workflow from classroom capture and OCR through notes and study materials', width: 1600, height: 1000, kind: 'diagram' }],
  },
]

export const additionalProjects: readonly Project[] = [
  {
    id: 'scrybe-sync',
    name: 'ScrybeSync',
    type: 'Additional work',
    role: 'Project contributor',
    summary: 'A note-taking project with AI summarization and transcription features.',
    workflow: 'Capture notes, then use supporting AI utilities for review and organization.',
    contributions: [
      'Combined a note-taking interface with summarization and transcription workflows.',
      'Kept the project focused on a small, understandable productivity flow.',
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
    summary: 'A project built for the Open iT Codefest 2025.',
    workflow: 'A focused competition project shaped around a defined product brief and delivery window.',
    contributions: [
      'Delivered a working competition project with a clear product flow and presentation surface.',
      'Used the project to practice focused scope, implementation, and demo readiness.',
    ],
    technologies: ['React', 'TypeScript', 'Web application'],
    repository: 'https://github.com/lucifron28/AQuest',
    media: [{ src: '/AQuest.png', alt: 'AQuest Codefest project interface', width: 1600, height: 900, kind: 'screen' }],
  },
]
