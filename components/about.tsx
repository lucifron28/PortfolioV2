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
      <div className="education-row">
        <div className="education-details">
          <h2>Education</h2>
          <h3>{education.institution}</h3>
          <p>{education.program}<br />{education.focus}<br />{education.expected}</p>
        </div>
        <ul className="education-standing">
          {education.academicStanding.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  )
}
