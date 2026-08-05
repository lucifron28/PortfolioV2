import { aboutText, education } from '@/content/portfolio'

export function About() {
  return (
    <section id="about" className="container-shell section-space about-section" aria-labelledby="about-title">
      <div className="about-grid">
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="section-title">Backend work with a clear product purpose.</h2>
        </div>
        <p className="about-copy">{aboutText}</p>
      </div>
      <div className="education-row">
        <div><p className="detail-label">Education</p><h3>{education.institution}</h3></div>
        <p>{education.program}, {education.focus}<br />{education.expected}</p>
        <ul>{education.academicStanding.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  )
}
