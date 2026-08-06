import { skillGroups } from '@/content/portfolio'

export function TechnicalFocus() {
  return (
    <section className="container-shell section-space technical-section" aria-labelledby="focus-title">
      <div className="section-heading">
        <p className="eyebrow">Technical focus</p>
        <h2 id="focus-title" className="section-title">Tools organized by the problems they help me solve.</h2>
      </div>
      <div className="technical-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="technical-panel">
            <p className="detail-label">{group.title}</p>
            <h3>{group.items[0]}</h3>
            <ul>
              {group.items.slice(1).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
