import { Download, Linkedin, Mail } from 'lucide-react'

import { site } from '@/content/portfolio'

export function Contact() {
  return (
    <section id="contact" className="container-shell section-space border-t border-border" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div>
          <h2 id="contact-title" className="section-title">Looking for a software engineering intern?</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            I am available for a 600-hour internship beginning in December 2026. I can report onsite or work hybrid in Lucena, Alabang, Makati, Taguig, and nearby Metro Manila locations.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="button-primary" href={site.links.email}>
            <Mail aria-hidden="true" size={16} />
            Email Ron
          </a>
          <a className="button-secondary" href={site.links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" size={16} />
            LinkedIn
          </a>
          <a className="button-secondary" href={site.resumePath} download>
            <Download aria-hidden="true" size={16} />
            Download résumé
          </a>
        </div>
      </div>
    </section>
  )
}
