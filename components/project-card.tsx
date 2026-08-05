'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import { ProjectDetailsModal } from '@/components/project-details-modal'
import type { Project } from '@/lib/portfolio-types'

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const media = project.media[0]
  const hasDetails = Boolean(project.workflow || project.contributions.length)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const detailsTriggerRef = useRef<HTMLButtonElement>(null)
  const closeDetails = useCallback(() => {
    setIsDetailsOpen(false)
    window.requestAnimationFrame(() => detailsTriggerRef.current?.focus())
  }, [])

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
          {hasDetails ? <button ref={detailsTriggerRef} className="project-details-button" type="button" aria-haspopup="dialog" onClick={() => setIsDetailsOpen(true)}>View details <ArrowUpRight aria-hidden="true" size={17} /></button> : null}
        </div>
        {hasDetails ? <ProjectDetailsModal isOpen={isDetailsOpen} onClose={closeDetails} project={project} /> : null}
      </div>
    </article>
  )
}
