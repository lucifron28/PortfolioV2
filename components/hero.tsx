import Link from 'next/link'
import { FolderOpen, Star } from 'lucide-react'

import { education, internshipRequirement, profileDescription } from '@/content/portfolio'
import { selectedProjects } from '@/content/projects'
import { ProjectCard } from '@/components/project-card'

export function Hero() {
  return (
    <section className="hero-intro" aria-labelledby="hero-title">
      <div className="identity-heading">
        <h1 id="hero-title">Profile.</h1>
      </div>
      <div className="identity-copy">
        <p>{profileDescription}</p>
      </div>
      <section className="quick-facts" aria-labelledby="highlights-title">
        <h2 id="highlights-title"><Star aria-hidden="true" size={21} /> Highlights</h2>
        <dl>
          <div><dt>{education.academicStanding[0].replace('GWA ', '')}</dt><dd>Current GWA</dd></div>
          <div><dt>{internshipRequirement.hours}</dt><dd>{internshipRequirement.label}</dd></div>
          <div><dt>2027</dt><dd>Expected graduation</dd></div>
        </dl>
      </section>
      <section className="featured-home-work" aria-labelledby="featured-work-title">
        <div className="section-inline-heading">
          <h2 id="featured-work-title"><FolderOpen aria-hidden="true" size={21} /> Featured work</h2>
          <Link href="/portfolio">View all work</Link>
        </div>
        <div className="featured-work-grid">
          {selectedProjects.slice(0, 2).map((project) => <ProjectCard key={project.id} project={project} compact featured />)}
        </div>
      </section>
    </section>
  )
}
