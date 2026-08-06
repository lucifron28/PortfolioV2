import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

import type { Project, ProjectCaseStudy } from '@/lib/portfolio-types'

type CaseStudyLayoutProps = {
  project: Project
  caseStudy: ProjectCaseStudy
  previous?: Project
  next?: Project
}

export function CaseStudyLayout({ project, caseStudy, previous, next }: CaseStudyLayoutProps) {
  const media = project.media[0]

  return (
    <article className="case-study-page">
      <header className="container-shell case-study-header">
        <Link className="back-link" href="/#work"><ArrowLeft aria-hidden="true" size={17} /> Back to selected work</Link>
        <p className="eyebrow">{project.type} · {project.role}</p>
        <h1>{project.name}</h1>
        <p className="case-study-lede">{project.summary}</p>
        <div className="case-study-actions">
          {project.repository ? <a className="button-primary" href={project.repository} target="_blank" rel="noreferrer">View repository <ArrowUpRight aria-hidden="true" size={17} /></a> : null}
        </div>
      </header>

      <dl className="container-shell case-study-facts">
        <div><dt>Status</dt><dd>{caseStudy.status}</dd></div>
        <div><dt>Scope</dt><dd>{caseStudy.scope}</dd></div>
        <div><dt>Team and role</dt><dd>{caseStudy.team}</dd></div>
      </dl>

      <div className="container-shell case-study-content">
        {media ? (
          <figure className="case-study-media">
            <Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes="(min-width: 1024px) 75rem, calc(100vw - 2rem)" unoptimized={media.src.endsWith('.svg')} />
            {caseStudy.mediaNote ? <figcaption>{caseStudy.mediaNote}</figcaption> : null}
          </figure>
        ) : null}

        <div className="case-study-body">
          <CaseStudySection title="The problem"><p>{caseStudy.problem}</p></CaseStudySection>
          <CaseStudyList title="Architecture" items={caseStudy.architecture} />
          <CaseStudyList title="Technical decisions" items={caseStudy.technicalDecisions} />
          <CaseStudyList title="Security and data ownership" items={caseStudy.securityAndData} />
          <CaseStudyList title="Reliability and operations" items={caseStudy.reliabilityAndOperations} />
          <CaseStudyList title="Testing and verification" items={caseStudy.testing} />
          <CaseStudyList title="Current limitations" items={caseStudy.limitations} />
        </div>
      </div>

      <nav className="container-shell case-study-pagination" aria-label="Project case studies">
        {previous ? <Link href={'/work/' + previous.id}><ArrowLeft aria-hidden="true" size={17} /><span><small>Previous</small>{previous.name}</span></Link> : <span />}
        {next ? <Link href={'/work/' + next.id}><span><small>Next</small>{next.name}</span><ArrowRight aria-hidden="true" size={17} /></Link> : <span />}
      </nav>
    </article>
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

function CaseStudyList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <CaseStudySection title={title}>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </CaseStudySection>
  )
}
