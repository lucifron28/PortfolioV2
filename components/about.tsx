import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { aboutText, education, growthText, nowFacts } from '@/content/portfolio'

export function About() {
  return (
    <section id="about" className="section-space about-section" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">Background</p>
        <h1 id="about-title" className="section-title">Background.</h1>
      </div>
      <div className="about-copy-block">
        <p className="about-copy">{aboutText}</p>
        <p className="about-growth">{growthText}</p>
      </div>
      <div className="quick-facts" aria-label="Current work">
        <h2>Right now</h2>
        <dl>
          {nowFacts.map((fact) => (
            <div key={fact.label}><dt>{fact.value}</dt><dd>{fact.label}</dd></div>
          ))}
        </dl>
      </div>
      <div className="education-row">
        <div><p className="detail-label">Education</p><h3>{education.institution}</h3></div>
        <p>{education.program}<br />{education.focus}<br />{education.expected}</p>
        <ul>{education.academicStanding.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  )
}

export function AboutCta() {
  return (
    <section className="container-shell section-space" aria-label="Where to go next">
      <p className="eyebrow">Next</p>
      <div className="hero-actions">
        <Link className="button-primary" href="/portfolio">See the work <ArrowRight aria-hidden="true" size={17} /></Link>
        <Link className="button-secondary" href="/credentials">Awards &amp; credentials <ArrowRight aria-hidden="true" size={17} /></Link>
      </div>
    </section>
  )
}
