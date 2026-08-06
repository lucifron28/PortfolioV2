import { aboutText, education, growthText } from '@/content/portfolio'

export function About() {
  return (
    <section id="about" className="container-shell section-space about-section" aria-labelledby="about-title">
      <div className="about-grid">
        <div>
          <p className="eyebrow">About and education</p>
          <h2 id="about-title" className="section-title">Backend engineering for web and mobile applications.</h2>
        </div>
        <div className="about-copy-block">
          <p className="about-copy">{aboutText}</p>
          <p className="about-growth">{growthText}</p>
        </div>
      </div>
      <div className="education-row">
        <div><p className="detail-label">Education</p><h3>{education.institution}</h3></div>
        <p>{education.program}<br />{education.focus}<br />{education.expected}</p>
        <ul>{education.academicStanding.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  )
}
