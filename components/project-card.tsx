import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import type { Project } from '@/lib/portfolio-types'

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const media = project.media[0]
  const cardClassName = 'project-card project-' + project.id + (compact ? ' project-card-compact' : '')
  const mediaClassName = media ? 'project-media project-media-' + media.kind : ''

  return (
    <article className={cardClassName}>
      {compact && media ? (
        <div className="project-compact-media">
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
            loading="lazy"
            sizes="(min-width: 640px) 8rem, 5rem"
          />
        </div>
      ) : null}
      {!compact && media ? (
        <div className={mediaClassName}>
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 92vw"
            unoptimized={media.src.endsWith('.svg')}
          />
        </div>
      ) : null}
      <div className="project-content">
        <div className="project-kicker"><span>{project.type}</span><span>{project.role}</span></div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-stack">{project.technologies.join(' · ')}</p>
        <div className="project-actions">
          {!compact && project.caseStudy ? (
            <Link className="project-details-link" href={'/work/' + project.id}>
              Project details <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          ) : null}
          {project.repository ? (
            <a className="repository-link" href={project.repository} target="_blank" rel="noreferrer">
              Repository <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
