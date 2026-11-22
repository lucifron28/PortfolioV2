import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Github } from 'lucide-react'

import type { ReactNode } from 'react'

import { caseStudyCopy } from '@/content/case-study-copy'
import type { Project, ProjectCaseStudy, ProjectMedia } from '@/lib/portfolio-types'

type CaseStudyLayoutProps = {
  project: Project
  caseStudy: ProjectCaseStudy
  previous?: Project
  next?: Project
}

export function CaseStudyLayout({ project, caseStudy, previous, next }: CaseStudyLayoutProps) {
  const copy = caseStudyCopy[project.id as keyof typeof caseStudyCopy]
  return (
    <article className={'case-study-page project-' + project.id}>
      <nav className="container-shell case-study-topbar" aria-label={project.name + ' links'}>
        <Link className="case-study-topbar-link" href="/portfolio">
          <ArrowLeft aria-hidden="true" size={16} /> Back to projects
        </Link>
        {project.repository ? (
          <a className="case-study-topbar-link" href={project.repository} target="_blank" rel="noopener noreferrer">
            <Github aria-hidden="true" size={16} /> View on GitHub
          </a>
        ) : null}
      </nav>

      <header className="container-shell case-study-header">
        <h1>{project.name}</h1>
        <p className="case-study-lede">{copy.overview}</p>
        <dl className="case-study-meta">
          <div>
            <dt>Project type</dt>
            <dd>{copy.projectType}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{copy.stack.join(' · ')}</dd>
          </div>
        </dl>
      </header>

      <CaseStudyFigure item={caseStudy.media.primary} variant="primary" />

      <div className="container-shell case-study-content">
        <div className="case-study-body">
          <CaseStudySection title="The problem">
            {copy.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </CaseStudySection>
          <CaseStudySection title="What I worked on">
            {copy.contribution.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </CaseStudySection>
          <CaseStudySection title="How it works">
            {copy.howItWorks.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </CaseStudySection>
          <CaseStudySection title="Key technical decisions">
            {copy.decisions.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </CaseStudySection>
          <CaseStudySection title="Testing and current status">
            {copy.status.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {project.recognition ? (
              <Link className="case-study-recognition" href={project.recognition.href}>{project.recognition.label}</Link>
            ) : null}
          </CaseStudySection>
        </div>

        {caseStudy.media.gallery?.length ? (
          <section className="case-study-gallery" aria-label={project.name + ' screenshots'}>
            <h2>More screenshots</h2>
            <div className="case-study-gallery-grid">
              {caseStudy.media.gallery.map((item) => <CaseStudyFigure key={item.src} item={item} variant="gallery" />)}
            </div>
          </section>
        ) : null}
      </div>

      <nav className="container-shell case-study-pagination" aria-label="Project case studies">
        {previous ? <Link href={'/work/' + previous.id}><ArrowLeft aria-hidden="true" size={17} /><span><small>Previous</small>{previous.name}</span></Link> : <span />}
        {next ? <Link href={'/work/' + next.id}><span><small>Next</small>{next.name}</span><ArrowRight aria-hidden="true" size={17} /></Link> : <span />}
      </nav>
    </article>
  )
}

function CaseStudyFigure({ item, variant }: { item: ProjectMedia; variant: 'primary' | 'gallery' }) {
  const isPortrait = item.height > item.width
  const className = 'container-shell case-study-media ' + (variant === 'primary' ? 'case-study-media-primary' : 'case-study-media-gallery') + (isPortrait ? ' case-study-media-portrait' : '')

  return (
    <figure className={className}>
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        sizes={variant === 'primary'
          ? '(min-width: 1180px) 75rem, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 1rem)'
          : '(min-width: 1024px) 34rem, (min-width: 640px) calc((100vw - 4rem) / 2), calc(100vw - 2rem)'}
        priority={variant === 'primary'}
      />
      {item.caption ? <figcaption>{item.caption}</figcaption> : null}
    </figure>
  )
}

function CaseStudySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="case-study-section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}
