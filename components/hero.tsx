import Image from 'next/image'
import { ArrowDownRight, Download, MapPin } from 'lucide-react'

import { heroSupport, site } from '@/content/portfolio'

export function Hero() {
  return (
    <section className="container-shell hero-grid" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Software engineering student · Portfolio 2026</p>
        <h1 id="hero-title">{site.title}</h1>
        <div className="hero-support-row">
          <p>{heroSupport}</p>
          <span className="hero-location"><MapPin aria-hidden="true" size={17} />{site.location}</span>
        </div>
        <div className="hero-actions">
          <a className="button-primary" href="#work">View selected work <ArrowDownRight aria-hidden="true" size={18} /></a>
          <a className="button-secondary" href={site.resumePath} download><Download aria-hidden="true" size={17} /> Download résumé</a>
        </div>
      </div>
      <div className="hero-portrait-wrap">
        <span className="portrait-index" aria-hidden="true">01 / INTRO</span>
        <div className="hero-portrait-frame">
          <Image src="/ron.jpg" alt="Ron Vincent Cada" fill priority sizes="(min-width: 1024px) 29vw, 70vw" className="hero-photo" />
        </div>
        <p className="portrait-caption">Backend systems · reliable handoffs · product-minded delivery</p>
      </div>
    </section>
  )
}
