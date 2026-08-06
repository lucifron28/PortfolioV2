import Image from 'next/image'

import { additionalProjects, selectedProjects } from '@/content/projects'
import { ProjectCard } from '@/components/project-card'

export function SelectedWork() {
  return (
    <section id="work" className="container-shell section-space" aria-labelledby="work-title">
      <div className="work-heading">
        <div className="work-heading-copy">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title" className="section-title">Projects for maintenance, talent marketplaces, intramurals, and classroom study.</h2>
          <p className="section-intro">Each project pairs a visible user workflow with the backend, data, authentication, or mobile boundary I worked on.</p>
        </div>
        <div className="work-heading-media" aria-hidden="true">
          <Image src="/projects/studylens/studylens-home.png" alt="" width={720} height={1608} loading="lazy" sizes="(min-width: 1024px) 18vw, 36vw" />
        </div>
      </div>
      <div className="project-grid">
        {selectedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      <div className="archive-section" aria-labelledby="additional-work-title">
        <div>
          <p className="eyebrow">Additional work</p>
          <h3 id="additional-work-title">Smaller projects with useful engineering signals.</h3>
        </div>
        <div className="archive-grid">
          {additionalProjects.map((project) => <ProjectCard key={project.id} project={project} compact />)}
        </div>
      </div>
    </section>
  )
}
