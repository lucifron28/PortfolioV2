import { ArrowUpRight, Mail } from 'lucide-react'

import { contactIntroduction, internshipRequirement, site } from '@/content/portfolio'

export function Contact() {
  return (
    <section id="contact" className="container-shell contact-section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <p className="contact-eyebrow">Contact</p>
        <h1 id="contact-title">Get in touch.</h1>
        <p className="contact-lede">{contactIntroduction}</p>
        <div className="contact-email">
          <Mail aria-hidden="true" size={19} />
          <div><span>Direct email</span><a href={site.links.email}>{site.email}</a></div>
        </div>
        <div className="contact-actions">
          <a className="contact-link" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={17} /></a>
          <a className="contact-link" href={site.links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={17} /></a>
        </div>
        <section className="internship-panel" aria-labelledby="internship-title">
          <h2 id="internship-title">Internship availability</h2>
          <dl className="availability-grid">
            <div><dt>Start date</dt><dd>{internshipRequirement.startDate}</dd></div>
            <div><dt>{internshipRequirement.label}</dt><dd>{internshipRequirement.duration}</dd></div>
            <div className="availability-wide"><dt>Arrangements</dt><dd>{internshipRequirement.arrangements}</dd></div>
            <div className="availability-wide"><dt>Locations</dt><dd>Lucena City, Alabang, Makati, Taguig, and nearby Metro Manila locations</dd></div>
            <div className="availability-wide"><dt>Work setup</dt><dd>Onsite or hybrid</dd></div>
          </dl>
        </section>
      </div>
    </section>
  )
}
