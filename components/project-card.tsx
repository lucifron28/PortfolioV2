import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import type { Project } from '@/lib/portfolio-types'

type ProjectCardProps = {
  project: Project
  compact?: boolean
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className={`project-card ${compact ? 'project-card-compact' : ''}`}>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span className="font-medium text-primary">{project.type}</span>
          <span aria-hidden="true">·</span>
          <span>{project.role}</span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{project.name}</h3>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{project.summary}</p>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.name} project interface`}
            width={360}
            height={220}
            className="project-image mt-6"
          />
        ) : null}
      </div>
      <div className="project-details">
        <div>
          <p className="detail-label">Workflow</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.workflow}</p>
        </div>
        <div className="mt-6">
          <p className="detail-label">Technical contributions</p>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-muted-foreground">
            {project.contributions.map((contribution) => (
              <li key={contribution} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:bg-primary">
                {contribution}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="project-meta">
        <div>
          <p className="detail-label">Technologies</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.technologies.join(' · ')}</p>
        </div>
        {project.repository ? (
          <a className="inline-link mt-6" href={project.repository} target="_blank" rel="noreferrer">
            View repository
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        ) : null}
      </div>
    </article>
  )
}
