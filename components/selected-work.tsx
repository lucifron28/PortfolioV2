import Image from 'next/image'

import { additionalProjects, selectedProjects } from '@/content/projects'
import { ProjectCard } from '@/components/project-card'

export function SelectedWork() {
  return (
    <section id="work" className="container-shell section-space" aria-labelledby="work-title">
      <div className="work-heading">
        <p className="eyebrow">Selected work · 04 systems</p>
        <h2 id="work-title" className="section-title">
          Systems built around <span className="inline-project-crop" aria-hidden="true"><Image src="/ScrybeSync.png" alt="" fill sizes="180px" /></span> real workflows.
        </h2>
        <p className="section-intro">A proof-led view of how I approach backend services, authentication, data, clients, and applied AI.</p>
      </div>
      <div className="project-grid">
        {selectedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      <div className="archive-section" aria-labelledby="additional-work-title">
        <div>
          <p className="eyebrow">Archive · 02</p>
          <h3 id="additional-work-title">Earlier and competition work.</h3>
        </div>
        <div className="archive-grid">
          {additionalProjects.map((project) => <ProjectCard key={project.id} project={project} compact />)}
        </div>
      </div>
    </section>
  )
}
