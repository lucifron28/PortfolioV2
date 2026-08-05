import Image from 'next/image'
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'

import { heroSupport, site } from '@/content/portfolio'

export function Hero() {
  return (
    <section className="container-shell section-space hero-grid" aria-labelledby="hero-title">
      <div className="max-w-3xl">
        <p className="eyebrow">Software engineering student</p>
        <h1 id="hero-title" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {site.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{heroSupport}</p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden="true" size={16} className="text-primary" />
            {site.location}
          </span>
          <span>{site.availability}</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="button-primary" href="#work">
            View selected work
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
          <a className="button-secondary" href={site.resumePath} download>
            <Download aria-hidden="true" size={16} />
            Download résumé
          </a>
        </div>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm">
          <a className="inline-link" href={site.links.github} target="_blank" rel="noreferrer">
            <Github aria-hidden="true" size={16} />
            GitHub
          </a>
          <a className="inline-link" href={site.links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" size={16} />
            LinkedIn
          </a>
          <a className="inline-link" href={site.links.email}>
            <Mail aria-hidden="true" size={16} />
            Email
          </a>
        </div>
      </div>
      <aside className="hero-aside" aria-label="Current focus">
        <Image
          src="/ron.jpg"
          alt="Ron Vincent Cada"
          width={240}
          height={280}
          priority
          className="hero-photo"
        />
        <div>
          <p className="text-sm font-semibold text-foreground">Current focus</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            API design, authentication, relational data, workflow systems, and reliable service integration.
          </p>
        </div>
      </aside>
    </section>
  )
}
