import type { Credential, Education, SkillGroup } from '@/lib/portfolio-types'

export const profileDescription =
  "I'm Ron Vincent Cada, an Information Technology student building full-stack applications with a primary focus on C# and ASP.NET Core backend development."

export const homepageIntroduction = [
  "I'm an Information Technology student at MSEUF, specializing in Web and Mobile Application Development. I build full-stack applications, with a primary focus on backend development using C# and ASP.NET Core. I particularly enjoy working on APIs, databases, and application logic.",
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
  "I like building things, even when the idea is random or doesn't have much practical use. Sometimes I just want to see if I can make something work. I also enjoy figuring out what happens behind the interface, especially when something doesn't behave the way I expected."

export const growthText =
  "I've worked on web and mobile apps, but lately I've been more interested in backend development. I'm focusing on C# and ASP.NET Core while learning more about web and API security. I'm also curious about how the internet works behind the scenes, from how browsers communicate with servers to how everything connects. I enjoy programming competitions, too."

export const contactIntroduction =
  'For development opportunities, collaboration, or project inquiries, you can reach me by email or LinkedIn.'

export const awards: readonly Credential[] = [
  {
    id: 'sikaptala',
    date: 'March 31, 2025',
    title: '2nd Place, DLSU-D SikapTala National CS and IT Skills Competition',
    placement: '2nd Place',
    event: 'DLSU-D SikapTala',
    year: '2025',
    detail: 'National CS and IT Skills Competition, Collegiate Python Category',
    context: 'Individual competition organized by De La Salle University-Dasmarinas.',
    image: '/credentials/sikaptala.jpg',
    verificationUrl: 'https://www.facebook.com/DLSUD.CICSSG/posts/pfbid06UarEPHZAexXfowA2i9bmRymXeFWQ3ZPUecZEMQonqXqJZSQ6LWotNhtYJAVmvQQl',
    verificationLabel: 'Winners announcement',
  },
  {
    id: 'openit-codefest',
    date: 'July 12–13, 2025',
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
    date: 'May 28, 2026',
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
    date: 'October 6, 2025',
    title: 'Top Individual Performer, Hack4Gov CALABARZON CTF',
    placement: 'Top Individual Performer',
    event: 'Hack4Gov CALABARZON CTF',
    year: '2025',
    detail: 'Regional cybersecurity competition',
    context: 'Recognition for individual performance.',
    imageLabel: 'View award evidence',
    supportingImages: [
      { src: '/credentials/hack4gov-2025.png', label: 'Hack4Gov 2025 certificate of recognition' },
      { src: '/credentials/hack4gov-2025-event.png', label: 'Hack4Gov 2025 event photo' },
    ],
    verificationUrl: 'https://www.facebook.com/share/18tF6Z89fx/',
    verificationLabel: 'Event post',
  },
  {
    id: 'codechum',
    date: 'Stage 3: November 27, 2024',
    title: '1st Place, Stage 3 & Grand Finals Finalist, CodeChum National Programming Challenge',
    placement: '1st Place, Stage 3 & Grand Finals Finalist',
    year: '2024',
    detail: 'National programming competition',
    image: '/credentials/codechum.png',
  },
  {
    id: 'coco',
    date: 'March 28, 2025 · March 2026',
    title: 'Back-to-Back 1st Place, COCO Coding Competition',
    placement: 'Back-to-Back 1st Place',
    year: '2025-2026',
    detail: 'MSEUF Cyber Week',
    imageLabel: 'View award evidence',
    supportingImages: [
      { src: '/credentials/coco-2025.png', label: 'First-place certificate · March 28, 2025' },
      { src: '/credentials/coco-2026-announcement.png', label: 'COCO first-place winner announcement · March 2026' },
    ],
    verificationUrl: 'https://mseuf.edu.ph/oso/news/mastechlaban-cyber-week-2026',
  },
]

export const certifications: readonly Credential[] = [
  { title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', category: 'Certification', issuer: 'Microsoft', date: 'July 6, 2026', image: '/credentials/azure-fundamentals.png' },
  {
    title: 'GitHub Foundations',
    date: 'June 26, 2025',
    category: 'Certification',
    issuer: 'GitHub',
    credentialId: 'nz51yDUa',
    image: '/credentials/github-foundations.png',
  },
]

export const training: readonly Credential[] = [
  {
    title: 'Open iT Applied Full Stack and Data Science Bootcamp',
    date: 'May 4–29, 2026',
    category: 'Training',
    issuer: 'Open iT',
    detail: 'Full Stack Development Track',
    image: '/credentials/openit-bootcamp-participation.jpg',
  },
  {
    title: 'CS50x: Introduction to Computer Science',
    date: 'September 17, 2024',
    category: 'Course',
    detail: 'Harvard CS50',
    credentialId: '7a497a92-d84d-4e71-9830-4bef46a606b1',
    image: '/credentials/cs50x.png',
  },
  {
    title: 'CS50P: Introduction to Programming with Python',
    date: 'January 17, 2024',
    category: 'Course',
    detail: 'Harvard CS50',
    credentialId: '4d3ce24e-561a-4004-bed2-e6e372995c6f',
    image: '/credentials/cs50p.png',
  },
  {
    title: 'Intermediate PostgreSQL',
    date: 'June 9, 2025',
    category: 'Course',
    detail: 'University of Michigan / Coursera',
    credentialId: 'GZO6VI362EUG',
    image: '/credentials/intermediate-postgresql.png',
  },
]
