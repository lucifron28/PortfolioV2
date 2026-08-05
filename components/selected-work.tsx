import { additionalProjects, selectedProjects } from '@/content/projects'

import { ProjectCard } from '@/components/project-card'

export function SelectedWork() {
  return (
    <section id="work" className="container-shell section-space" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="work-title" className="section-title">Systems built around real workflows.</h2>
        <p className="section-intro">
          Four recent projects show how I approach backend services, authentication, data, clients, and applied AI features.
        </p>
      </div>
      <div className="mt-12">
        {selectedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-16" aria-labelledby="additional-work-title">
        <div className="section-heading">
          <h3 id="additional-work-title" className="text-2xl font-semibold tracking-tight text-foreground">Additional work</h3>
          <p className="section-intro">A small sample of earlier and competition-focused projects.</p>
        </div>
        <div className="mt-8">
          {additionalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
