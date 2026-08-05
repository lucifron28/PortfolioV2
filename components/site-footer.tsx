import { Github, Linkedin, Mail } from 'lucide-react'

import { site } from '@/content/portfolio'

export function SiteFooter() {
  return <footer className="site-footer"><div className="container-shell"><p>© 2026 {site.name}</p><nav aria-label="Social links"><a href={site.links.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={16} />GitHub</a><a href={site.links.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" size={16} />LinkedIn</a><a href={site.links.email}><Mail aria-hidden="true" size={16} />Email</a></nav></div></footer>
}
