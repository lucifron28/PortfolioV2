import { aboutText, education, growthText } from '@/content/portfolio'

export function About() {
  return (
    <section id="about" className="section-space about-section" aria-labelledby="about-title">
      <div className="section-heading">
        <h1 id="about-title" className="section-title">About Me</h1>
      </div>
      <div className="about-copy-block">
        <p className="about-copy">{aboutText}</p>
        <p className="about-growth">{growthText}</p>
      </div>
      <section className="education-section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <div className="education-grid">
          <article className="education-item">
            <p className="education-label">Institution</p>
            <h3>{education.institution}</h3>
            <p>{education.expected}</p>
          </article>
          <article className="education-item">
            <p className="education-label">Program</p>
            <h3>{education.program}</h3>
            <p>{education.focus}</p>
          </article>
          <div className="education-item">
            <p className="education-label">Academic standing</p>
            <ul>
              {education.academicStanding.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </section>
  )
}
