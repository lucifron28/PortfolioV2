import type { Credential, Education, SkillGroup } from '@/lib/portfolio-types'

export const profileDescription =
  'I’m Ron Vincent Cada, a BS Information Technology student focused on backend and full-stack development. I mainly build APIs and web applications using C#, ASP.NET Core, Python, Django REST Framework, React, SQL, and Docker.'

export const internshipRequirement = {
  hours: '600 HRS',
  duration: '600 hours',
  label: 'OJT requirement',
  availability: 'Available for a 600-hour internship beginning in early December 2026',
  startDate: 'December 2026',
} as const

export const site = {
  name: 'Ron Vincent Cada',
  title: 'Profile.',
  description: profileDescription,
  location: 'Lucena City, Philippines',
  availability: internshipRequirement.availability,
  resumePath: '/Ron_Vincent_Cada_CV.pdf',
  email: 'cronvincent@gmail.com',
  links: {
    github: 'https://github.com/lucifron28',
    linkedin: 'https://www.linkedin.com/in/ron-vincent-cada/',
    email: 'mailto:cronvincent@gmail.com',
  },
} as const

export const navigationLinks = [
  { label: 'Home', href: '/', download: false },
  { label: 'Work', href: '/portfolio', download: false },
  { label: 'Background', href: '/about', download: false },
  { label: 'Awards', href: '/credentials', download: false },
  { label: 'Contact', href: '/contact', download: false },
  { label: 'CV', href: site.resumePath, download: true },
] as const

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Authenticated APIs',
    items: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'ASP.NET Core Identity', 'Django REST Framework', 'REST APIs'],
  },
  {
    title: 'Application data',
    items: ['SQL Server', 'PostgreSQL', 'SQLite', 'Redis', 'Celery', 'Docker', 'Docker Compose', 'Git', 'GitHub Actions'],
  },
  {
    title: 'Web and Android clients',
    items: ['React', 'TypeScript', 'Kotlin', 'Jetpack Compose', 'CameraX', 'ML Kit OCR', 'Retrofit'],
  },
  {
    title: 'Search and OCR',
    items: ['SQL Server Full-Text Search', 'embeddings', 'Reciprocal Rank Fusion', 'source-bounded retrieval', 'Whisper', 'OCR'],
  },
]

export const education: Education = {
  institution: 'Manuel S. Enverga University Foundation',
  program: 'Bachelor of Science in Information Technology',
  focus: 'Web and Mobile Application Development',
  expected: 'Expected 2027',
  academicStanding: ['GWA 1.315', 'University Scholar', "Dean's Lister"],
}

export const aboutText =
  'I study BS Information Technology at Manuel S. Enverga University Foundation. I build APIs and the React or Android clients that use them.'

export const growthText =
  'College changed how I work. I became a University Scholar, earned a 1.315 GWA, and placed in programming competitions including Open iT Codefest, CodeChum, and DLSU-D SikapTala.'

export const nowFacts: readonly { value: string; label: string }[] = [
  { value: 'UniPM', label: 'Capstone, in development' },
  { value: 'StudyLens', label: 'Latest solo build' },
  { value: 'Dec 2026', label: internshipRequirement.duration + ' internship begins' },
]

export const awards: readonly Credential[] = [
  {
    title: 'Top Performer and Best in Capstone',
    detail: 'Open iT Applied Full Stack and Data Science Bootcamp',
    image: '/credentials/openit-bootcamp-best-in-capstone.jpg',
  },
  {
    title: '1st Place, Open iT Codefest',
    detail: '27-hour inter-institution hackathon',
    image: '/credentials/openit-codefest.png',
  },
  { title: 'Top Performer, Hack4Gov CALABARZON CTF' },
  {
    title: '2nd Place, DLSU-D SikapTala',
    detail: 'National Python Collegiate Competition',
    image: '/credentials/sikaptala.jpg',
  },
  {
    title: 'CodeChum National Programming Competition',
    detail: '1st Place Stage 3 and grand finals finalist',
    image: '/credentials/codechum.png',
  },
]

export const certifications: readonly Credential[] = [
  { title: 'Microsoft Certified: Azure Fundamentals (AZ-900)' },
  {
    title: 'GitHub Foundations',
    credentialId: 'nz51yDUa',
    image: '/credentials/github-foundations.png',
  },
]

export const training: readonly Credential[] = [
  {
    title: 'Open iT Applied Full Stack and Data Science Bootcamp',
    detail: 'Full Stack Development Track',
    image: '/credentials/openit-bootcamp-participation.jpg',
  },
  {
    title: 'CS50x: Introduction to Computer Science',
    detail: 'Harvard CS50',
    credentialId: '7a497a92-d84d-4e71-9830-4bef46a606b1',
    image: '/credentials/cs50x.png',
  },
  {
    title: 'CS50P: Introduction to Programming with Python',
    detail: 'Harvard CS50',
    credentialId: '4d3ce24e-561a-4004-bed2-e6e372995c6f',
    image: '/credentials/cs50p.png',
  },
  {
    title: 'Intermediate PostgreSQL',
    detail: 'University of Michigan / Coursera',
    credentialId: 'GZO6VI362EUG',
    image: '/credentials/intermediate-postgresql.png',
  },
]
