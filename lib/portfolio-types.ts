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
  image?: string
  imageAlt?: string
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
