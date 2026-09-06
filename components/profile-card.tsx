import Image from 'next/image'
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'

import { site } from '@/content/portfolio'

export function ProfileCard() {
  return (
    <aside className="profile-card" aria-labelledby="profile-name">
      <div className="profile-portrait">
        <Image src="/ron.jpg" alt="Ron Vincent Cada" fill priority sizes="(min-width: 1100px) 15rem, 7rem" className="profile-photo" />
      </div>
      <div className="profile-heading">
        <p id="profile-name">{site.name}</p>
        <span>BSIT student and developer</span>
      </div>
      <dl className="profile-contact-list">
        <div>
          <dt><Mail aria-hidden="true" size={16} /> Email</dt>
          <dd><a href={site.links.email}>{site.email}</a></dd>
        </div>
        <div>
          <dt><MapPin aria-hidden="true" size={16} /> Location</dt>
          <dd>{site.location}</dd>
        </div>
      </dl>
      <nav className="profile-links" aria-label="Profile links">
        <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="Ron Cada on GitHub"><Github aria-hidden="true" size={19} /></a>
        <a href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="Ron Cada on LinkedIn"><Linkedin aria-hidden="true" size={19} /></a>
        <a href={site.links.email} aria-label="Email Ron Cada"><Mail aria-hidden="true" size={19} /></a>
        <a href={site.resumePath} download aria-label="Download Ron Cada's résumé"><Download aria-hidden="true" size={19} /></a>
      </nav>
    </aside>
  )
}
