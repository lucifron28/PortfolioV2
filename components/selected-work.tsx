import { additionalProjects, selectedProjects } from '@/content/projects'
import { ProjectCard } from '@/components/project-card'

export function SelectedWork() {
  return (
    <section id="work" className="container-shell section-space" aria-labelledby="work-title">
      <div className="work-heading-copy">
        <p className="eyebrow">Projects</p>
        <h1 id="work-title" className="section-title">Selected projects.</h1>
        <p className="section-intro">Web, mobile, and backend projects I&apos;ve worked on.</p>
      </div>
      <div className="project-grid">
        {selectedProjects.map((project, index) => <ProjectCard key={project.id} project={project} priority={index === 0} />)}
      </div>
      <div className="archive-section" aria-labelledby="additional-work-title">
        <div>
          <h2 id="additional-work-title">Archive</h2>
        </div>
        <div className="archive-grid">
          {additionalProjects.map((project) => <ProjectCard key={project.id} project={project} compact />)}
        </div>
      </div>
    </section>
  )
}
