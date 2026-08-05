'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X } from 'lucide-react'

import type { Project } from '@/lib/portfolio-types'

type ProjectDetailsModalProps = {
  isOpen: boolean
  onClose: () => void
  project: Project
}

export function ProjectDetailsModal({ isOpen, onClose, project }: ProjectDetailsModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const titleId = `project-modal-${project.id}-title`
  const descriptionId = `project-modal-${project.id}-description`

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusDialog = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus()
    })

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      )

      if (!focusable.length) {
        event.preventDefault()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(focusDialog)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !isMounted) return null

  return createPortal(
    <div className="project-modal-backdrop" onMouseDown={onClose}>
      <div
        ref={dialogRef}
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="project-modal-header">
          <div>
            <p className="project-modal-kicker">{project.type}</p>
            <h2 id={titleId}>{project.name}</h2>
          </div>
          <button ref={closeButtonRef} className="icon-button" type="button" aria-label={`Close ${project.name} details`} onClick={onClose}>
            <X aria-hidden="true" size={19} />
          </button>
        </header>
        <div className="project-modal-body">
          <p id={descriptionId} className="project-modal-summary">{project.summary}</p>
          {project.workflow ? (
            <section className="project-modal-section" aria-labelledby={`project-modal-${project.id}-workflow`}>
              <h3 id={`project-modal-${project.id}-workflow`}>Workflow</h3>
              <p>{project.workflow}</p>
            </section>
          ) : null}
          {project.contributions.length ? (
            <section className="project-modal-section" aria-labelledby={`project-modal-${project.id}-contributions`}>
              <h3 id={`project-modal-${project.id}-contributions`}>What I built</h3>
              <ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          ) : null}
          {project.repository ? (
            <a className="repository-link project-modal-repository" href={project.repository} target="_blank" rel="noreferrer">
              View repository <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  )
}
