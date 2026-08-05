import type { Credential, Education, SkillGroup } from '@/lib/portfolio-types'

export const site = {
  name: 'Ron Vincent Cada',
  shortName: 'Ron Cada',
  title: 'Backend-focused software engineering student.',
  description:
    'Backend-focused software engineering student building secure APIs, workflow systems, full-stack applications, and source-grounded AI features with ASP.NET Core, Python, React, SQL, and Docker.',
  location: 'Lucena City, Philippines',
  availability: 'Available for a 600-hour internship beginning December 2026',
  resumePath: '/Ron_Vincent_Cada_CV.pdf',
  email: 'cronvincent@gmail.com',
  links: {
    github: 'https://github.com/lucifron28',
    linkedin: 'https://www.linkedin.com/in/ron-vincent-cada/',
    email: 'mailto:cronvincent@gmail.com',
  },
} as const

export const navigationLinks = [
  { label: 'Work', href: '#work', download: false },
  { label: 'About', href: '#about', download: false },
  { label: 'Credentials', href: '#credentials', download: false },
  { label: 'Contact', href: '#contact', download: false },
  { label: 'Resume', href: site.resumePath, download: true },
] as const

export const heroSupport =
  'I build secure APIs, workflow systems, full-stack applications, and source-grounded AI features using ASP.NET Core, Python, React, SQL Server, PostgreSQL, and Docker.'

export const credibilityItems = [
  { label: 'Open iT Bootcamp', value: 'Top Performer and Best in Capstone' },
  { label: 'Open iT Codefest', value: '1st Place' },
  { label: 'Microsoft Certified', value: 'Azure Fundamentals' },
  { label: 'Academic standing', value: 'GWA 1.328, University Scholar and Dean’s Lister' },
] as const

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Backend',
    items: ['C#', 'ASP.NET Core', 'EF Core', 'ASP.NET Core Identity', 'Django REST Framework', 'REST APIs'],
  },
  {
    title: 'Data and infrastructure',
    items: ['SQL Server', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Compose', 'Git', 'GitHub Actions'],
  },
  {
    title: 'Frontend and mobile',
    items: ['React', 'TypeScript', 'Kotlin', 'Jetpack Compose', 'CameraX', 'ML Kit OCR', 'Retrofit'],
  },
  {
    title: 'Applied AI',
    items: ['Full-Text Search', 'Embeddings', 'RRF', 'RAG', 'Whisper', 'OCR'],
  },
]

export const education: Education = {
  institution: 'Manuel S. Enverga University Foundation',
  program: 'BSIT',
  focus: 'Web and Mobile Application Development',
  expected: 'Expected 2027',
  academicStanding: ['GWA 1.328', 'University Scholar', 'Dean’s Lister'],
}

export const aboutText =
  'I am a BSIT student specializing in Web and Mobile Application Development at Manuel S. Enverga University Foundation. My main interest is backend engineering, including API design, authentication, relational databases, workflow systems, and reliable integration between services and clients. I also build Android applications and source-grounded AI features when they support a clear product requirement.'

export const awards: readonly Credential[] = [
  {
    title: 'Top Performer and Best in Capstone',
    detail: 'Open iT Applied Full Stack and Data Science Bootcamp',
  },
  { title: '1st Place', detail: 'Open iT Codefest' },
  { title: 'Top Performer', detail: 'Hack4Gov CALABARZON CTF' },
  { title: '2nd Place', detail: 'SikapTala National Python Collegiate Competition' },
  {
    title: '1st Place Stage 3 and Grand Finals Finalist',
    detail: 'CodeChum National Programming Competition',
  },
]

export const certifications: readonly Credential[] = [
  { title: 'Microsoft Certified: Azure Fundamentals' },
  { title: 'GitHub Foundations' },
  { title: 'CS50x' },
  { title: 'CS50P' },
  { title: 'Intermediate PostgreSQL', detail: 'University of Michigan' },
  { title: 'Open iT Applied Full Stack and Data Science Bootcamp' },
]
