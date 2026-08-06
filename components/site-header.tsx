import Link from 'next/link'
import { CodeXml, Github } from 'lucide-react'

import { MobileNavigation } from '@/components/mobile-navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { navigationLinks, site } from '@/content/portfolio'

const sectionLinks = navigationLinks.filter((link) => !link.download)

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-shell header-inner">
        <Link href="/" className="brand-link" aria-label="Ron Cada home">
          <span className="brand-mark" aria-hidden="true"><CodeXml size={18} strokeWidth={2.25} /></span>
          <span className="brand-name">{site.shortName}</span>
        </Link>
        <div className="header-actions">
          <nav className="desktop-navigation" aria-label="Primary navigation">
            {sectionLinks.map((link) => <a key={link.label} href={link.href} className="nav-link">{link.label}</a>)}
            <a className="resume-link" href={site.resumePath} download>Download résumé</a>
          </nav>
          <a className="icon-button" href={site.links.github} target="_blank" rel="noreferrer" aria-label="Ron Cada on GitHub"><Github aria-hidden="true" size={19} /></a>
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
