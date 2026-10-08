'use client'

import Link from 'next/link'
import { CodeXml } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { MobileNavigation } from '@/components/mobile-navigation'
import { navigationLinks, site } from '@/content/portfolio'

const sectionLinks = navigationLinks.filter((link) => !link.download)

export function SiteHeader() {
  const pathname = usePathname()
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    document.getElementById('main-content')?.focus()
  }, [pathname])

  const currentLabel = pathname === '/'
    ? 'Home'
    : pathname.startsWith('/work/') || pathname === '/portfolio'
      ? 'Projects'
      : pathname === '/credentials'
        ? 'Awards'
        : pathname.slice(1).replace(/-/g, ' ').replace(/^./, (letter) => letter.toUpperCase())

  return (
    <header className="site-header">
      <div className="container-shell header-inner">
        <Link href="/" className="brand-link" aria-label="Ron Cada home">
          <span className="brand-mark" aria-hidden="true"><CodeXml size={18} strokeWidth={2.25} /></span>
          <span className="brand-name">{currentLabel}</span>
        </Link>
        <div className="header-actions">
          <nav className="desktop-navigation" aria-label="Primary navigation">
            {sectionLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/') || (link.href === '/portfolio' && pathname.startsWith('/work/'))
              return <Link key={link.label} href={link.href} className={'nav-link' + (isActive ? ' is-active' : '')} aria-current={isActive ? 'page' : undefined}>{link.label}</Link>
            })}
            <a className="resume-link" href={site.resumePath} download>CV</a>
          </nav>
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
