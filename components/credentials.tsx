'use client'

import Image from 'next/image'
import { ExternalLink, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { awards, certifications, training } from '@/content/portfolio'
import type { Credential } from '@/lib/portfolio-types'

export function Credentials() {
  const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null)

  useEffect(() => {
    if (!selectedCredential) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCredential(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCredential])

  return (
    <section id="credentials" className="container-shell section-space credentials-section" aria-labelledby="credentials-title">
      <div className="section-heading credentials-heading">
        <p className="eyebrow">Awards</p>
        <h1 id="credentials-title" className="section-title">Awards &amp; credentials.</h1>
      </div>
      <div className="credentials-lists">
        <CredentialList title="Awards" items={awards} onSelect={setSelectedCredential} />
        <CredentialList title="Certifications" items={certifications} onSelect={setSelectedCredential} />
        <CredentialList title="Training" items={training} onSelect={setSelectedCredential} />
      </div>

      {selectedCredential && selectedCredential.image ? (
        <div
          className="credential-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-credential-title"
          onClick={() => setSelectedCredential(null)}
        >
          <div className="credential-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="credential-modal-header">
              <div>
                <h2 id="modal-credential-title">{selectedCredential.title}</h2>
                {selectedCredential.detail ? <p>{selectedCredential.detail}</p> : null}
                {selectedCredential.credentialId ? (
                  <p className="credential-id">Credential ID: {selectedCredential.credentialId}</p>
                ) : null}
              </div>
              <button
                type="button"
                className="credential-modal-close"
                onClick={() => setSelectedCredential(null)}
                aria-label="Close dialog"
              >
                <X aria-hidden="true" size={18} />
              </button>
            </div>
            <div className="credential-modal-image-wrap">
              <Image
                src={selectedCredential.image}
                alt={selectedCredential.title}
                width={1200}
                height={850}
                priority
                className="credential-modal-image"
                sizes="(min-width: 1024px) 50rem, 92vw"
              />
            </div>
          </div>
        </div>
      ) : null}
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
  onSelect: (item: Credential) => void
}) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.title + (item.detail ?? '')} className="credential-item">
            <div className="credential-info">
              <span>{item.title}</span>
              {item.detail ? <small>{item.detail}</small> : null}
            </div>
            {item.image ? (
              <button
                type="button"
                className="credential-action-btn"
                onClick={() => onSelect(item)}
                aria-label={'View certificate for ' + item.title}
              >
                View certificate <ExternalLink aria-hidden="true" size={13} />
              </button>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
