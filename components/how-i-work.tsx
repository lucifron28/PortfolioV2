const workingPrinciples = [
  {
    number: '01',
    title: 'Clarify the workflow',
    body: 'Map user roles, state changes, data ownership, and failure paths before choosing an endpoint or screen.',
  },
  {
    number: '02',
    title: 'Build explicit boundaries',
    body: 'Keep authentication, authorization, secrets, and AI-provider calls behind clear server contracts.',
  },
  {
    number: '03',
    title: 'Verify what ships',
    body: 'Use tests, migrations, health checks, documentation, and CI when the project scope supports them.',
  },
] as const

export function HowIWork() {
  return (
    <section className="container-shell section-space how-work-section" aria-labelledby="how-work-title">
      <div className="section-heading">
        <p className="eyebrow">How I work</p>
        <h2 id="how-work-title" className="section-title">A practical loop for turning requirements into dependable handoffs.</h2>
      </div>
      <div className="how-work-grid">
        {workingPrinciples.map((principle) => (
          <article key={principle.number}>
            <span className="how-work-number">{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
