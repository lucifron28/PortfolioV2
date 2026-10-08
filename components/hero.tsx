import Link from 'next/link'

import { awards, homepageIntroduction, site } from '@/content/portfolio'
import { selectedProjects } from '@/content/projects'
import { ProjectCard } from '@/components/project-card'

export function Hero() {
  return (
    <>
      <section className="hero-intro" aria-labelledby="hero-title">
        <div className="identity-heading">
          <h1 id="hero-title">{site.title}</h1>
        </div>
        <div className="identity-copy">
          {homepageIntroduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <nav className="hero-actions" aria-label="Primary links">
          <Link className="button-primary" href="/portfolio">View Projects</Link>
          <Link className="button-secondary" href="/contact">Get in Touch</Link>
        </nav>
      </section>

      <section className="recognition-section" aria-labelledby="recognition-title">
        <div className="section-inline-heading recognition-heading">
          <h2 id="recognition-title">Competition results &amp; recognition</h2>
          <Link href="/credentials">All awards</Link>
        </div>
        <div className="recognition-grid">
          {awards.slice(0, 4).map((award, index) => (
            <article
              key={award.id ?? award.title}
              className={'recognition-card' + (index === 0 ? ' recognition-card-primary' : '')}
            >
              <div className="recognition-card-heading">
                <p className="recognition-placement">{award.placement ?? award.title}</p>
                {award.year ? <span className="recognition-year">{award.year}</span> : null}
              </div>
              <h3>{award.event ?? award.title}</h3>
              {award.detail ? <p className="recognition-detail">{award.detail}</p> : null}
              {award.context ? <p className="recognition-context">{award.context}</p> : null}
              <div className="recognition-links">
                {award.image ? (
                  <a href={award.image} target="_blank" rel="noreferrer">{award.imageLabel ?? 'View certificate'}</a>
                ) : null}
                {award.verificationUrl ? (
                  <a href={award.verificationUrl} target="_blank" rel="noreferrer">University article</a>
                ) : null}
                {!award.image && !award.verificationUrl ? (
                  <Link href={award.id ? '/credentials#' + award.id : '/credentials'}>Award details</Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-home-work" aria-labelledby="featured-work-title">
        <div className="section-inline-heading">
          <h2 id="featured-work-title">Featured projects</h2>
          <Link href="/portfolio">View all projects</Link>
        </div>
        <div className="featured-work-grid">
          {selectedProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} compact featured />
          ))}
        </div>
      </section>
    </>
  )
}
