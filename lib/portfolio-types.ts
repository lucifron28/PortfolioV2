export type ProjectMedia = {
  src: string
  alt: string
  width: number
  height: number
  kind: 'screen' | 'diagram' | 'credential'
}

export type Project = {
  id: string
  name: string
  type: string
  role: string
  summary: string
  workflow: string
  contributions: readonly string[]
  technologies: readonly string[]
  repository?: string
  media: readonly ProjectMedia[]
}

export type SkillGroup = {
  title: string
  items: readonly string[]
}

export type Credential = {
  title: string
  detail?: string
  media?: ProjectMedia
}

export type Education = {
  institution: string
  program: string
  focus: string
  expected: string
  academicStanding: readonly string[]
}
