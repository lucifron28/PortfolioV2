import type { ReactNode } from 'react'

import { ProfileCard } from '@/components/profile-card'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="portfolio-shell">
        <ProfileCard />
        <div className="portfolio-content">
          <SiteHeader />
          <main id="main-content" className="page-main" tabIndex={-1}>
            <div className="portfolio-content-inner">{children}</div>
          </main>
          <SiteFooter />
        </div>
      </div>
    </>
  )
}
