'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import type { Credential } from '@/lib/portfolio-types'

export function useCredentialViewer() {
  const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const credentialImages = selectedCredential
    ? [
        ...(selectedCredential.image
          ? [{ src: selectedCredential.image, label: selectedCredential.title }]
          : []),
        ...(selectedCredential.supportingImages ?? []),
      ]
    : []

  useEffect(() => {
    if (!selectedCredential) return

    const opener = openerRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCredential(null)
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (!firstElement || !lastElement) {
        event.preventDefault()
        closeButtonRef.current?.focus()
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (opener?.isConnected) opener.focus()
    }
  }, [selectedCredential])

  function openCredential(item: Credential, opener: HTMLElement) {
    openerRef.current = opener
    setSelectedCredential(item)
  }

  function closeCredential() {
    setSelectedCredential(null)
  }

  const modal = selectedCredential && credentialImages.length > 0 ? (
    <div className="credential-modal-backdrop" onClick={closeCredential}>
      <div
        ref={dialogRef}
        className="credential-modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-credential-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="credential-modal-header">
          <div>
            <h2 id="modal-credential-title">{selectedCredential.title}</h2>
            {selectedCredential.detail ? <p>{selectedCredential.detail}</p> : null}
            {selectedCredential.credentialId ? (
              <p className="credential-id">Credential ID: {selectedCredential.credentialId}</p>
            ) : null}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="credential-modal-close"
            onClick={closeCredential}
            aria-label="Close dialog"
          >
            <X aria-hidden="true" size={18} />
          </button>
        </div>
        <div className="credential-modal-image-wrap">
          {credentialImages.map((image) => (
            <figure className="credential-modal-figure" key={image.src}>
              <Image
                src={image.src}
                alt={image.label}
                width={1200}
                height={850}
                priority
                className="credential-modal-image"
                sizes="(min-width: 1024px) 50rem, 92vw"
              />
              {selectedCredential.supportingImages?.some((supportingImage) => supportingImage.src === image.src) ? (
                <figcaption>{image.label}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </div>
  ) : null

  return { openCredential, modal }
}
