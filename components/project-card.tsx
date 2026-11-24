import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'

import type { Project } from '@/lib/portfolio-types'
import { ProjectDemo } from '@/components/project-demo'

type ProjectCardProps = {
  project: Project
  compact?: boolean
  featured?: boolean
  priority?: boolean
}

export function ProjectCard({ project, compact = false, featured = false, priority = false }: ProjectCardProps) {
  const media = project.cardMedia ?? project.media?.[0]
  const cardClassName = 'project-card project-' + project.id + (compact ? ' project-card-compact' : '') + (featured ? ' project-card-featured' : '')
  const isPortrait = media ? media.height > media.width : false

  return (
    <article className={cardClassName}>
      {compact && media ? (
        <div className={'project-compact-media' + (isPortrait ? ' project-media-portrait' : '')}>
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
            loading={priority ? undefined : 'lazy'}
            priority={priority}
            sizes={featured ? '(min-width: 1180px) 27rem, (min-width: 768px) 45vw, calc(100vw - 3rem)' : '(min-width: 640px) 9rem, 7rem'}
          />
        </div>
      ) : null}
      {!compact && media ? (
        <div className={'project-media' + (isPortrait ? ' project-media-portrait' : '')}>
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
            loading={priority ? undefined : 'lazy'}
            priority={priority}
            sizes={isPortrait
              ? '(min-width: 1180px) 11rem, (min-width: 768px) 20vw, 40vw'
              : '(min-width: 1180px) 27rem, (min-width: 768px) calc((100vw - 6rem) / 2), (min-width: 640px) calc(100vw - 5rem), calc(100vw - 3rem)'}
            unoptimized={media.src.endsWith('.svg')}
          />
        </div>
      ) : null}
      <div className="project-content">
        <p className="project-kicker">{project.type}</p>
        {compact ? <h3>{project.name}</h3> : <h2>{project.name}</h2>}
        {project.date ? <p className="project-kicker">{project.date}</p> : null}
        <p className="project-summary">{project.summary}</p>
        {project.recognition ? (
          <Link className="project-recognition" href={project.recognition.href}>
            {project.recognition.label} <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        ) : null}
        <p className="project-stack">{project.technologies.slice(0, 4).join(' · ')}</p>
        <div className="project-actions">
          {project.caseStudy ? (
            <Link className="project-details-link" href={'/work/' + project.id}>
              View case study
            </Link>
          ) : null}
          {project.id === 'unipm' ? <ProjectDemo /> : null}
          {project.repository ? (
            <a className="repository-link" href={project.repository} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" size={16} /> View on GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
