import type { Credential, Education, SkillGroup } from '@/lib/portfolio-types'

export const profileDescription =
  "I'm Ron Vincent Cada, an Information Technology student building full-stack applications with a primary focus on C# and ASP.NET Core backend development."

export const homepageIntroduction = [
  "I'm an Information Technology student at MSEUF, specializing in Web and Mobile Application Development. I build full-stack applications, with a primary focus on backend development using C# and ASP.NET Core. I particularly enjoy working on APIs, databases, and application logic.",
  'Programming is something I enjoy outside the classroom, too. I like experimenting with ideas, figuring out how things work, and joining coding competitions for the challenge.',
] as const

export const professionalHighlights = [
  { label: 'Primary Focus', value: 'ASP.NET Core / Backend Development' },
  { label: 'Actively Learning', value: 'Web & API Security' },
] as const

export const internshipRequirement = {
  hours: '600 HRS',
  duration: '600 hours',
  label: 'OJT requirement',
  availability: 'Expected to begin a 600-hour internship on December 1, 2026',
  startDate: 'December 1, 2026',
  arrangements: 'Final arrangements are subject to university requirements.',
} as const

export const site = {
  name: 'Ron Vincent Cada',
  title: 'Full-stack developer.',
  description: profileDescription,
  location: 'Mauban, Quezon, Philippines',
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
    title: 'Backend Development',
    items: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'PHP', 'Laravel', 'Python', 'Django REST Framework'],
  },
  {
    title: 'Data, Tools & Infrastructure',
    items: ['SQL Server', 'PostgreSQL', 'SQLite', 'Redis', 'Celery', 'Git', 'Docker', 'GitHub Actions', 'OpenAI Codex'],
  },
  {
    title: 'Frontend & Mobile',
    items: ['TypeScript', 'React', 'Kotlin', 'Jetpack Compose', 'Flutter', 'React Native', 'Expo'],
  },
  {
    title: 'Testing & Quality',
    items: ['xUnit', 'PHPUnit', 'pytest', 'API and integration tests', 'Concurrency tests'],
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
  'I keep programming outside class because I like turning ideas into small experiments and seeing how they behave. I enjoy tracing how a system works and figuring out where a problem comes from.'

export const growthText =
  'My recent projects have included backend APIs, full-stack web applications, and mobile apps. I am concentrating on C# and ASP.NET Core, and I am currently learning more about web and API security. Application architecture, cloud infrastructure, networking, and programming competitions are interests I want to keep exploring.'

export const contactIntroduction =
  'For development opportunities, collaboration, or project inquiries, you can reach me by email or LinkedIn.'

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
    imageLabel: 'View photo and certificate',
    supportingImages: [{ src: '/credentials/openit-codefest-2025-certificate.png', label: 'Open iT Codefest 2025 certificate of achievement' }],
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
    imageLabel: 'View 2025 certificate',
    supportingImages: [{ src: '/credentials/hack4gov-2025.png', label: 'Hack4Gov 2025 certificate of recognition' }],
  },
  {
    id: 'codechum',
    title: '1st Place, Stage 3 & Grand Finals Finalist, CodeChum National Programming Challenge',
    placement: '1st Place, Stage 3 & Grand Finals Finalist',
    year: '2024',
    detail: 'National programming competition',
    image: '/credentials/codechum.png',
  },
  {
    id: 'coco',
    title: 'Back-to-Back 1st Place, COCO Coding Competition',
    placement: 'Back-to-Back 1st Place',
    year: '2025-2026',
    detail: 'MSEUF Cyber Week',
    imageLabel: 'View 2025 certificate',
    supportingImages: [{ src: '/credentials/coco-2025.png', label: '2025 first-place certificate' }],
  },
]

export const certifications: readonly Credential[] = [
  { title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', category: 'Certification', issuer: 'Microsoft', image: '/credentials/azure-fundamentals.png' },
  {
    title: 'GitHub Foundations',
    category: 'Certification',
    issuer: 'GitHub',
    credentialId: 'nz51yDUa',
    image: '/credentials/github-foundations.png',
  },
]

export const training: readonly Credential[] = [
  {
    title: 'Open iT Applied Full Stack and Data Science Bootcamp',
    category: 'Training',
    issuer: 'Open iT',
    detail: 'Full Stack Development Track',
    image: '/credentials/openit-bootcamp-participation.jpg',
  },
  {
    title: 'CS50x: Introduction to Computer Science',
    category: 'Course',
    detail: 'Harvard CS50',
    credentialId: '7a497a92-d84d-4e71-9830-4bef46a606b1',
    image: '/credentials/cs50x.png',
  },
  {
    title: 'CS50P: Introduction to Programming with Python',
    category: 'Course',
    detail: 'Harvard CS50',
    credentialId: '4d3ce24e-561a-4004-bed2-e6e372995c6f',
    image: '/credentials/cs50p.png',
  },
  {
    title: 'Intermediate PostgreSQL',
    category: 'Course',
    detail: 'University of Michigan / Coursera',
    credentialId: 'GZO6VI362EUG',
    image: '/credentials/intermediate-postgresql.png',
  },
]
