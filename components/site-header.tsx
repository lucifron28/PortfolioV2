'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { MobileNavigation } from '@/components/mobile-navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { navigationLinks, site } from '@/content/portfolio'

const sectionLinks = navigationLinks.filter((link) => link.href.startsWith('#'))

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = sectionLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(`#${visible[0].target.id}`)
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.15, 0.4] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <div className="container-shell header-inner">
        <Link href="/" className="brand-link" aria-label="Ron Cada home">
          <span>RC</span><span className="brand-name">{site.shortName}</span>
        </Link>
        <div className="header-actions">
          <nav className="desktop-navigation" aria-label="Primary navigation">
            {sectionLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link" aria-current={activeSection === link.href ? 'location' : undefined}>
                {link.label}
              </a>
            ))}
            <a className="resume-link" href={site.resumePath} download>Résumé</a>
          </nav>
          <ThemeToggle />
          <MobileNavigation activeSection={activeSection} />
        </div>
      </div>
    </header>
  )
}
