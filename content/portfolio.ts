import type { Credential, Education, SkillGroup } from '@/lib/portfolio-types'

export const site = {
  name: 'Ron Vincent Cada',
  shortName: 'Ron Cada',
  title: 'Backend-focused BSIT student.',
  description:
    'Backend-focused BSIT student building secure APIs, workflow systems, Android applications, and source-grounded AI features with ASP.NET Core, Python, React, SQL Server, PostgreSQL, and Docker.',
  location: 'Lucena City, Philippines',
  availability: 'Available for a 600-hour internship beginning in early December 2026',
  resumePath: '/Ron_Vincent_Cada_CV.pdf',
  email: 'cronvincent@gmail.com',
  links: {
    github: 'https://github.com/lucifron28',
    linkedin: 'https://www.linkedin.com/in/ron-vincent-cada/',
    email: 'mailto:cronvincent@gmail.com',
  },
} as const

export const navigationLinks = [
  { label: 'Work', href: '/#work', download: false },
  { label: 'About', href: '/#about', download: false },
  { label: 'Credentials', href: '/#credentials', download: false },
  { label: 'Contact', href: '/#contact', download: false },
  { label: 'Resume', href: site.resumePath, download: true },
] as const

export const heroSupport =
  'I build secure APIs, workflow systems, Android applications, and source-grounded AI features using ASP.NET Core, Python, React, SQL Server, PostgreSQL, and Docker.'

export const credibilityItems = [
  { label: 'Open iT Bootcamp', value: 'Top Performer and Best in Capstone' },
  { label: 'Open iT Codefest', value: '1st Place' },
  { label: 'Microsoft Certified', value: 'Azure Fundamentals' },
  { label: 'Academic standing', value: "GWA 1.328, University Scholar and Dean's Lister" },
] as const

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Backend',
    items: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'ASP.NET Core Identity', 'Django REST Framework', 'REST APIs'],
  },
  {
    title: 'Data and infrastructure',
    items: ['SQL Server', 'PostgreSQL', 'SQLite', 'Redis', 'Celery', 'Docker', 'Docker Compose', 'Git', 'GitHub Actions'],
  },
  {
    title: 'Frontend and mobile',
    items: ['React', 'TypeScript', 'Kotlin', 'Jetpack Compose', 'CameraX', 'ML Kit OCR', 'Retrofit'],
  },
  {
    title: 'Retrieval and AI',
    items: ['SQL Server Full-Text Search', 'embeddings', 'Reciprocal Rank Fusion', 'source-bounded retrieval', 'Whisper', 'OCR'],
  },
]

export const education: Education = {
  institution: 'Manuel S. Enverga University Foundation',
  program: 'Bachelor of Science in Information Technology',
  focus: 'Web and Mobile Application Development',
  expected: 'Expected 2027',
  academicStanding: ['GWA 1.328', 'University Scholar', "Dean's Lister"],
}

export const aboutText =
  'I am a Bachelor of Science in Information Technology student at Manuel S. Enverga University Foundation, specializing in Web and Mobile Application Development. My strongest interests are API design, authentication, relational databases, workflow systems, native Android clients, and AI-assisted features with a clear server boundary.'

export const growthText =
  'I was not a disciplined student in high school. College gave me a chance to rebuild my habits, and I have since become a University Scholar and competition winner.'

export const awards: readonly Credential[] = [
  {
    title: 'Top Performer and Best in Capstone',
    detail: 'Open iT Applied Full Stack and Data Science Bootcamp',
  },
  { title: '1st Place', detail: 'Open iT Codefest, a 27-hour inter-institution hackathon' },
  { title: 'Top Performer', detail: 'Hack4Gov CALABARZON CTF' },
  { title: '2nd Place', detail: 'DLSU-D SikapTala National Python Collegiate Competition' },
  { title: '1st Place Stage 3 and Grand Finals Finalist', detail: 'CodeChum National Programming Competition' },
]

export const certifications: readonly Credential[] = [
  { title: 'Microsoft Certified: Azure Fundamentals' },
  { title: 'GitHub Foundations' },
  { title: 'CS50x' },
  { title: 'CS50P' },
  { title: 'Intermediate PostgreSQL', detail: 'University of Michigan' },
  { title: 'Open iT Applied Full Stack and Data Science Bootcamp', detail: 'Full Stack Development Track' },
]
