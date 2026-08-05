import Image from 'next/image'
import { ArrowUpRight, Plus } from 'lucide-react'

import type { Project } from '@/lib/portfolio-types'

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const media = project.media[0]
  const hasDetails = Boolean(project.workflow || project.contributions.length)
  return (
    <article className={`project-card project-${project.id} ${compact ? 'project-card-compact' : ''}`}>
      <div className="project-media">
        <Image src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy" sizes={compact ? '(min-width: 768px) 44vw, 92vw' : '(min-width: 1024px) 58vw, 92vw'} unoptimized={media.src.endsWith('.svg')} />
      </div>
      <div className="project-content">
        <div className="project-kicker"><span>{project.type}</span><span>{project.role}</span></div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-stack">{project.technologies.join(', ')}</p>
        <div className="project-actions">
          {project.repository ? <a className="repository-link" href={project.repository} target="_blank" rel="noreferrer">Repository <ArrowUpRight aria-hidden="true" size={17} /></a> : null}
          {hasDetails ? <details className="project-disclosure">
            <summary><span>Project details</span><Plus aria-hidden="true" size={18} /></summary>
            <div className="project-disclosure-content">
              {project.workflow ? <p>{project.workflow}</p> : null}
              {project.contributions.length ? <ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </div>
          </details> : null}
        </div>
      </div>
    </article>
  )
}
