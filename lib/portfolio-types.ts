export type ProjectMedia = {
  src: string
  alt: string
  width: number
  height: number
  kind: 'screen' | 'diagram'
}

export type ProjectCaseStudy = {
  status: string
  scope: string
  problem: string
  team: string
  architecture: readonly string[]
  technicalDecisions: readonly string[]
  securityAndData: readonly string[]
  reliabilityAndOperations: readonly string[]
  testing: readonly string[]
  limitations: readonly string[]
  mediaNote?: string
}

export type Project = {
  id: string
  name: string
  type: string
  role: string
  summary: string
  contributions: readonly string[]
  technologies: readonly string[]
  repository?: string
  media: readonly ProjectMedia[]
  caseStudy?: ProjectCaseStudy
}

export type SkillGroup = {
  title: string
  items: readonly string[]
}

export type Credential = {
  title: string
  detail?: string
}

export type Education = {
  institution: string
  program: string
  focus: string
  expected: string
  academicStanding: readonly string[]
}
