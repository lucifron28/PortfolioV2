import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import type { Project } from '@/lib/portfolio-types'

type ProjectCardProps = {
  project: Project
  compact?: boolean
  featured?: boolean
}

export function ProjectCard({ project, compact = false, featured = false }: ProjectCardProps) {
  const media = project.cardMedia ?? project.media?.[0]
  const cardClassName = 'project-card project-' + project.id + (compact ? ' project-card-compact' : '') + (featured ? ' project-card-featured' : '')
  const mediaClassName = media ? 'project-media project-media-' + media.kind : ''

  return (
    <article className={cardClassName}>
      {compact && media ? (
        <div className={'project-compact-media' + (media ? ' project-compact-media-' + media.kind : '')}>
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
            loading="lazy"
            sizes={featured ? '(min-width: 1180px) 26rem, (min-width: 640px) 20rem, calc(100vw - 2rem)' : '(min-width: 640px) 8rem, 5rem'}
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
            sizes="(min-width: 1180px) 26rem, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
            unoptimized={media.src.endsWith('.svg')}
          />
        </div>
      ) : null}
      <div className="project-content">
        <div className="project-kicker"><span>{project.type}</span><span>{project.role}</span></div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-stack">{project.technologies.slice(0, 3).join(' · ')}</p>
        <div className="project-actions">
          {project.caseStudy ? (
            <Link className="project-details-link" href={'/work/' + project.id}>
              View case study <ArrowUpRight aria-hidden="true" size={17} />
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
