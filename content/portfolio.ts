import type { Credential, Education, SkillGroup } from '@/lib/portfolio-types'

export const profileDescription =
  "I'm Ron Vincent Cada, a BSIT student focused on full-stack development, with a particular interest in backend systems, APIs, and databases."

export const homepageIntroduction = [
  "I'm an Information Technology student at MSEUF, specializing in Web and Mobile Application Development. I focus on full-stack development, with a particular interest in backend systems, APIs, databases, and application logic.",
  'Programming is also something I enjoy outside the classroom. I like experimenting with ideas, figuring out how things work, and joining coding competitions for the challenge.',
] as const

export const internshipRequirement = {
  hours: '600 HRS',
  duration: '600 hours',
  label: 'OJT requirement',
  availability: 'Expected to begin a 600-hour internship around December 7, 2026',
  startDate: 'Around December 7, 2026',
  arrangements: 'Final arrangements are subject to university requirements.',
} as const

export const site = {
  name: 'Ron Vincent Cada',
  title: 'Full-stack developer.',
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
  { label: 'Projects', href: '/portfolio', download: false },
  { label: 'About', href: '/about', download: false },
  { label: 'Awards', href: '/credentials', download: false },
  { label: 'Contact', href: '/contact', download: false },
  { label: 'CV', href: site.resumePath, download: true },
] as const

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Backend & Databases',
    items: ['C#', 'ASP.NET Core', 'Python', 'Django REST Framework', 'PostgreSQL', 'SQL Server'],
  },
  {
    title: 'Frontend & Mobile',
    items: ['TypeScript', 'React', 'Kotlin', 'Jetpack Compose', 'Flutter'],
  },
  {
    title: 'Development Tools',
    items: ['Git', 'Docker', 'GitHub Actions', 'Redis', 'Celery'],
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
  'I enjoy programming outside class. I like trying out ideas to understand how software works and finding ways to solve a problem.'

export const growthText =
  'My focus is full-stack development, with a stronger interest in backend systems, APIs, and databases. I also enjoy programming competitions for the challenge of working through unfamiliar problems.'

export const contactIntroduction =
  'For internship opportunities, development roles, collaboration, or freelance project inquiries, you can reach me by email or LinkedIn.'

export const awards: readonly Credential[] = [
  {
    id: 'sikaptala',
    title: '2nd Place, DLSU-D SikapTala National CS and IT Skills Competition',
    placement: '2nd Place',
    event: 'DLSU-D SikapTala',
    year: '2025',
    detail: 'National CS and IT Skills Competition, Collegiate Python Category',
    context: 'Individual competition organized by De La Salle University-Dasmarinas.',
    image: '/credentials/sikaptala.jpg',
  },
  {
    id: 'openit-codefest',
    title: '1st Place, Open iT Codefest',
    placement: '1st Place',
    event: 'Open iT Codefest',
    year: '2025',
    detail: '27-hour inter-institution hackathon',
    context: 'Team software development under time constraints.',
    image: '/credentials/openit-codefest.png',
    imageLabel: 'View award photo',
    verificationUrl: 'https://mseuf.edu.ph/ccms/news/codefest-2025-1st-place',
  },
  {
    id: 'openit-bootcamp',
    title: 'Top Performer & Best in Capstone, Open iT Bootcamp',
    placement: 'Top Performer & Best in Capstone',
    event: 'Open iT Bootcamp',
    year: '2026',
    detail: 'Applied Full Stack and Data Science Bootcamp, Full Stack Development Track',
    context: 'Best in Capstone awarded for Sidekick.',
    image: '/credentials/openit-bootcamp-best-in-capstone.jpg',
    supportingImages: [{ src: '/credentials/openit-bootcamp-top-performer.jpg', label: 'Top Performer certificate' }],
    verificationUrl: 'https://mseuf.edu.ph/ccms/news/open-it-bootcamp',
  },
  {
    id: 'hack4gov',
    title: 'Top Individual Performer, Hack4Gov CALABARZON CTF',
    placement: 'Top Individual Performer',
    event: 'Hack4Gov CALABARZON CTF',
    year: '2025',
    detail: 'Regional cybersecurity competition',
    context: 'Recognition for individual performance.',
  },
  {
    id: 'codechum',
    title: '1st Place, Stage 3 & Grand Finals Finalist, CodeChum National Programming Challenge',
    year: '2024',
    detail: 'National programming competition',
    image: '/credentials/codechum.png',
  },
  {
    id: 'coco',
    title: 'Back-to-Back 1st Place, COCO Coding Competition',
    year: '2025-2026',
    detail: 'MSEUF Cyber Week',
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
