import Link from 'next/link'

import { MobileNavigation } from '@/components/mobile-navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { navigationLinks, site } from '@/content/portfolio'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-shell flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-semibold tracking-tight text-foreground" aria-label="Ron Cada home">
          {site.shortName}
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download ? true : undefined}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
