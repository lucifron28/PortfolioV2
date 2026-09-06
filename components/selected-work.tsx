import { additionalProjects, selectedProjects } from '@/content/projects'
import { ProjectCard } from '@/components/project-card'

export function SelectedWork() {
  return (
    <section id="work" className="container-shell section-space" aria-labelledby="work-title">
      <div className="work-heading-copy">
        <p className="eyebrow">Portfolio</p>
        <h1 id="work-title" className="section-title">Selected work.</h1>
        <p className="section-intro">Backend APIs, web applications, and an Android learning companion.</p>
      </div>
      <div className="project-grid">
        {selectedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      <div className="archive-section" aria-labelledby="additional-work-title">
        <div>
          <h3 id="additional-work-title">Archive</h3>
        </div>
        <div className="archive-grid">
          {additionalProjects.map((project) => <ProjectCard key={project.id} project={project} compact />)}
        </div>
      </div>
    </section>
  )
}
