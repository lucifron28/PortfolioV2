import { ArrowUpRight, Download, Mail } from 'lucide-react'

import { internshipRequirement, site } from '@/content/portfolio'

export function Contact() {
  return (
    <section id="contact" className="container-shell contact-section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <p className="contact-eyebrow">Contact</p>
        <h1 id="contact-title">Internship availability.</h1>
        <p className="contact-lede">I am available from December 2026 for a 600-hour development internship. I can work onsite or hybrid.</p>
        <dl className="availability-grid">
          <div><dt>Start date</dt><dd>{internshipRequirement.startDate}</dd></div>
          <div><dt>Requirement</dt><dd>{internshipRequirement.duration}</dd></div>
          <div className="availability-wide"><dt>Locations</dt><dd>Lucena City, Alabang, Makati, Taguig, and nearby Metro Manila locations</dd></div>
          <div className="availability-wide"><dt>Work setup</dt><dd>Onsite or hybrid</dd></div>
        </dl>
        <div className="contact-email">
          <Mail aria-hidden="true" size={19} />
          <div><span>Direct email</span><a href={site.links.email}>{site.email}</a></div>
        </div>
        <div className="contact-actions">
          <a className="contact-link" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={17} /></a>
          <a className="contact-link" href={site.resumePath} download>Download CV <Download aria-hidden="true" size={17} /></a>
        </div>
      </div>
    </section>
  )
}
