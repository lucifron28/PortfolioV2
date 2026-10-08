'use client'

import { ExternalLink } from 'lucide-react'

import { awards, certifications, training } from '@/content/portfolio'
import { useCredentialViewer } from '@/components/use-credential-viewer'
import type { Credential } from '@/lib/portfolio-types'

export function Credentials() {
  const { openCredential, modal } = useCredentialViewer()

  return (
    <section id="credentials" className="container-shell section-space credentials-section" aria-labelledby="credentials-title">
      <div className="section-heading credentials-heading">
        <p className="eyebrow">Awards</p>
        <h1 id="credentials-title" className="section-title">Awards &amp; credentials.</h1>
      </div>
      <div className="credentials-lists">
        <div className="credentials-awards-list">
          <CredentialList title="Awards" items={awards} onSelect={openCredential} />
        </div>
        <div className="credentials-secondary-lists">
          <CredentialList title="Certifications" items={certifications} onSelect={openCredential} />
          <CredentialList title="Training" items={training} onSelect={openCredential} />
        </div>
      </div>
      {modal}
    </section>
  )
}

function CredentialList({
  title,
  items,
  onSelect,
}: {
  title: string
  items: readonly Credential[]
  onSelect: (item: Credential, opener: HTMLElement) => void
}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => {
          const hasCertificate = Boolean(item.image || item.supportingImages?.length)

          return (
            <li id={item.id} key={item.id ?? item.title + (item.detail ?? '')} className="credential-item">
              <div className="credential-info">
                <span>{item.title}</span>
                {item.year ? <small className="credential-year">{item.year}</small> : null}
                {item.detail ? <small>{item.detail}</small> : null}
                {item.context ? <small>{item.context}</small> : null}
              </div>
              <div className="credential-actions">
                {hasCertificate ? (
                  <button
                    type="button"
                    className="credential-action-btn"
                    onClick={(event) => onSelect(item, event.currentTarget)}
                    aria-label={(item.imageLabel ?? 'View certificate') + ' for ' + item.title}
                  >
                    {item.imageLabel ?? 'View certificate'} <ExternalLink aria-hidden="true" size={13} />
                  </button>
                ) : null}
                {item.verificationUrl ? (
                  <a className="credential-action-btn" href={item.verificationUrl} target="_blank" rel="noreferrer">
                    University article <ExternalLink aria-hidden="true" size={13} />
                  </a>
                ) : null}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
