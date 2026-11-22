export type ProjectMedia = {
  src: string
  alt: string
  width: number
  height: number
  kind: 'screen'
  caption?: string
}

export type ProjectCaseStudy = {
  media: {
    primary: ProjectMedia
    gallery?: readonly ProjectMedia[]
  }
}

export type Project = {
  id: string
  name: string
  type: string
  role: string
  summary: string
  contributions: readonly string[]
  technologies: readonly string[]
  recognition?: {
    label: string
    href: string
  }
  repository?: string
  media?: readonly ProjectMedia[]
  cardMedia?: ProjectMedia
  caseStudy?: ProjectCaseStudy
}

export type SkillGroup = {
  title: string
  items: readonly string[]
}
export type Credential = {
  id?: string
  category?: 'Certification' | 'Training' | 'Course'
  issuer?: string
  title: string
  detail?: string
  year?: string
  placement?: string
  event?: string
  context?: string
  image?: string
  imageLabel?: string
  supportingImages?: readonly { src: string; label: string }[]
  credentialId?: string
  verificationUrl?: string
}

export type Education = {
  institution: string
  program: string
  focus: string
  expected: string
  academicStanding: readonly string[]
}
