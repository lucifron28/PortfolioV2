import Link from 'next/link'

import { homepageIntroduction, site } from '@/content/portfolio'
import { selectedProjects } from '@/content/projects'
import { HomepageRecognition } from '@/components/homepage-recognition'
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

      <HomepageRecognition />

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
