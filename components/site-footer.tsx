import { ArrowUp } from 'lucide-react'

import { site } from '@/content/portfolio'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-shell">
        <p>© 2026 {site.name}</p>
        <nav aria-label="Footer navigation">
          <a href="#main-content">Back to top <ArrowUp aria-hidden="true" size={17} /></a>
        </nav>
      </div>
    </footer>
  )
}
