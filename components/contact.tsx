import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { site } from '@/content/portfolio'

export function Contact() {
  return (
    <section id="contact" className="container-shell contact-section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <p className="contact-index">04 / ACTION</p>
        <div><p className="eyebrow">Available December 2026</p><h2 id="contact-title">Let’s build dependable software together.</h2></div>
        <div className="contact-detail"><p>I am available for a 600-hour software engineering internship, onsite or hybrid in Lucena, Alabang, Makati, Taguig, and nearby Metro Manila locations.</p><div className="contact-actions"><a className="button-contact" href={site.links.email}><Mail aria-hidden="true" size={18} /> Email Ron</a><a className="contact-link" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={17} /></a><a className="contact-link" href={site.resumePath} download>Résumé <Download aria-hidden="true" size={17} /></a></div></div>
      </div>
    </section>
  )
}
