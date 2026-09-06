import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CaseStudyLayout } from '@/components/case-study-layout'
import { PageFrame } from '@/components/page-frame'
import { getProjectById, selectedProjects } from '@/content/projects'

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return selectedProjects.map((project) => ({ slug: project.id }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectById(slug)
  if (!project) return {}

  return {
    title: project.name + ' | Ron Vincent Cada',
    description: project.summary,
    alternates: { canonical: '/work/' + project.id },
    openGraph: {
      title: project.name + ' | Ron Vincent Cada',
      description: project.summary,
      url: '/work/' + project.id,
      type: 'article',
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectById(slug)

  if (!project?.caseStudy) notFound()

  const index = selectedProjects.findIndex((item) => item.id === project.id)
  const previous = index > 0 ? selectedProjects[index - 1] : undefined
  const next = index >= 0 && index < selectedProjects.length - 1 ? selectedProjects[index + 1] : undefined

  return (
    <PageFrame>
      <CaseStudyLayout project={project} caseStudy={project.caseStudy} previous={previous} next={next} />
    </PageFrame>
  )
}
