import { site } from '@/content/portfolio'

export function SiteFooter() {
  return <footer className="site-footer"><div className="container-shell"><p>© 2026 {site.name}</p><nav aria-label="Social links"><a href={site.links.github} target="_blank" rel="noreferrer">GitHub</a><a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={site.links.email}>Email</a></nav></div></footer>
}
