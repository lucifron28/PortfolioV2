import { additionalProjects, selectedProjects } from '@/content/projects'
import { ProjectCard } from '@/components/project-card'

export function SelectedWork() {
  return (
    <section id="work" className="container-shell section-space" aria-labelledby="work-title">
      <div className="work-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="work-title" className="section-title">Projects for university maintenance, talent marketplaces, intramurals, and classroom study.</h2>
        <p className="section-intro">The projects cover backend services, authentication, databases, client apps, and applied AI.</p>
      </div>
      <div className="project-grid">
        {selectedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      <div className="archive-section" aria-labelledby="additional-work-title">
        <div>
          <p className="eyebrow">Additional work</p>
          <h3 id="additional-work-title">Additional projects.</h3>
        </div>
        <div className="archive-grid">
          {additionalProjects.map((project) => <ProjectCard key={project.id} project={project} compact />)}
        </div>
      </div>
    </section>
  )
}
