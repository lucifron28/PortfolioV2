import { skillGroups } from '@/content/portfolio'

export function TechnicalFocus() {
  return (
    <section className="container-shell section-space technical-section" aria-labelledby="focus-title">
      <div className="section-heading">
        <h2 id="focus-title" className="section-title">Technical Skills.</h2>
      </div>
      <div className="technical-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="technical-panel">
            <h3>{group.title}</h3>
            <ul className="technical-panel-list">
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
