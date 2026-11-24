'use client'

import { ExternalLink } from 'lucide-react'

import { awards, certifications, training } from '@/content/portfolio'
import { useCredentialViewer } from '@/components/use-credential-viewer'
import type { Credential } from '@/lib/portfolio-types'

export function Credentials() {
  const { openCredential, modal } = useCredentialViewer()
  const learning = [...certifications, ...training]

  return (
    <section id="credentials" className="container-shell section-space credentials-section" aria-labelledby="credentials-title">
      <div className="section-heading credentials-heading">
        <p className="eyebrow">Awards</p>
        <h1 id="credentials-title" className="section-title">Awards &amp; credentials</h1>
        <p className="credentials-intro">Competition placements, academic recognition, certifications, and technical training.</p>
      </div>
      <section className="credentials-group" aria-labelledby="competition-awards-title">
        <h2 id="competition-awards-title">Competition awards</h2>
        <ul className="credentials-grid awards-grid">
          {awards.map((item) => (
            <li key={item.id ?? item.title} id={item.id}>
              <article className="credential-card award-card">
                <header className="credential-card-header">
                  <div className="award-heading">
                    {item.placement ? <p className="award-placement">{item.placement}</p> : null}
                    <h3>{item.event ?? (item.placement && item.title.startsWith(item.placement) ? item.title.slice(item.placement.length).replace(/^,\s*/, '') : item.title)}</h3>
                  </div>
                  {item.year ? <span className="credential-year">{item.year}</span> : null}
                </header>
                {item.date ? <p className="credential-detail">{item.date}</p> : null}
                {item.detail ? <p className="credential-detail">{item.detail}</p> : null}
                {item.context ? <p className="credential-context">{item.context}</p> : null}
                <CredentialActions item={item} onSelect={openCredential} />
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section className="credentials-group" aria-labelledby="learning-title">
        <h2 id="learning-title">Certifications &amp; training</h2>
        <ul className="credentials-grid learning-grid">
          {learning.map((item) => (
            <li key={item.title}>
              <article className="credential-card learning-card">
                <p className="credential-category">{item.category}</p>
                <h3>{item.title}</h3>
                {item.date ? <p className="credential-detail">{item.date}</p> : null}
                {item.issuer ? <p className="credential-detail">{item.issuer}</p> : null}
                {item.detail ? <p className="credential-detail">{item.detail}</p> : null}
                <CredentialActions item={item} onSelect={openCredential} />
              </article>
            </li>
          ))}
        </ul>
      </section>
      {modal}
    </section>
  )
}

function CredentialActions({ item, onSelect }: { item: Credential; onSelect: (item: Credential) => void }) {
  const hasCertificate = Boolean(item.image || item.supportingImages?.length)
  if (!hasCertificate && !item.verificationUrl) return null

  return (
    <div className="credential-actions">
      {hasCertificate ? (
        <button type="button" className="credential-action-btn" onClick={() => onSelect(item)} aria-label={(item.imageLabel ?? 'View certificate') + ' for ' + item.title}>
          {item.imageLabel ?? 'View certificate'} <ExternalLink aria-hidden="true" size={14} />
        </button>
      ) : null}
      {item.verificationUrl ? (
        <a className="credential-action-btn" href={item.verificationUrl} target="_blank" rel="noreferrer">
          {item.verificationLabel ?? 'University article'} <ExternalLink aria-hidden="true" size={14} />
        </a>
      ) : null}
    </div>
  )
}
