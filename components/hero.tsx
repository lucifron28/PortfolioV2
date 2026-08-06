import Image from 'next/image'
import { ArrowDownRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'

import { heroSupport, site } from '@/content/portfolio'

export function Hero() {
  return (
    <section className="container-shell hero-grid" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Software engineering portfolio</p>
        <h1 id="hero-title">{site.title}</h1>
        <p className="hero-support">{heroSupport}</p>
        <div className="hero-meta">
          <span className="hero-location"><MapPin aria-hidden="true" size={17} />{site.location}</span>
          <span className="hero-availability">{site.availability}</span>
        </div>
        <div className="hero-actions">
          <a className="button-primary" href="#work">View selected work <ArrowDownRight aria-hidden="true" size={18} /></a>
          <a className="button-secondary" href={site.resumePath} download><Download aria-hidden="true" size={17} /> Download résumé</a>
        </div>
        <nav className="hero-secondary-links" aria-label="Contact links">
          <a href={site.links.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={16} /> GitHub</a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" size={16} /> LinkedIn</a>
          <a href={site.links.email}><Mail aria-hidden="true" size={16} /> Email</a>
        </nav>
      </div>
      <figure className="hero-portrait-wrap">
        <div className="hero-portrait-frame">
          <Image src="/ron.jpg" alt="Ron Vincent Cada" fill priority sizes="(min-width: 1024px) 17vw, 42vw" className="hero-photo" />
        </div>
      </figure>
    </section>
  )
}
