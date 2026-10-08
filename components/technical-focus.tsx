import { skillGroups } from '@/content/portfolio'

export function TechnicalFocus() {
  return (
    <section className="container-shell section-space technical-section" aria-labelledby="focus-title">
      <div className="section-heading">
        <p className="eyebrow">Technical toolkit</p>
        <h2 id="focus-title" className="section-title">Tools I use.</h2>
      </div>
      <div className="technical-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="technical-panel">
            <h3>{group.title}</h3>
            <p className="technical-panel-summary">{summaryFor(group.title)}</p>
            <ul className="technical-panel-list">
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function summaryFor(title: string) {
  const summaries: Record<string, string> = {
    'Authenticated APIs': 'Requests, identity, and permission boundaries.',
    'Application data': 'Persistence, background work, and repeatable environments.',
    'Web and Android clients': 'Interfaces that connect the workflow to the API.',
    'Document and study tools': 'Transcription, editable OCR notes, and AI calls handled by the backend.',
  }

  return summaries[title] ?? 'Tools used across my project work.'
}
