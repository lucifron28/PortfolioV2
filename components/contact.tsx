import { ArrowUpRight, Download, Mail } from 'lucide-react'

import { site } from '@/content/portfolio'

export function Contact() {
  return (
    <section id="contact" className="container-shell contact-section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">Next step</p>
          <h2 id="contact-title">Looking for a software engineering intern?</h2>
        </div>
        <div className="contact-detail">
          <p>I am available for a 600-hour internship beginning in early December 2026. I can work onsite or hybrid in Lucena, Alabang, Makati, Taguig, and nearby Metro Manila locations.</p>
          <div className="contact-actions">
            <a className="button-contact" href={site.links.email}><Mail aria-hidden="true" size={18} /> Email Ron</a>
            <a className="contact-link" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={17} /></a>
            <a className="contact-link" href={site.resumePath} download>Download résumé <Download aria-hidden="true" size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
