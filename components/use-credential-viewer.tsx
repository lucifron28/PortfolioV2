'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import type { Credential } from '@/lib/portfolio-types'

export function useCredentialViewer() {
  const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null)
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const pressedOutside = useRef(false)
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

    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [selectedCredential])

  function openCredential(item: Credential) {
    setSelectedCredential(item)
  }

  function isOutside(event: React.PointerEvent<HTMLDialogElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom
  }

  const modal = selectedCredential && credentialImages.length > 0 ? (
      <dialog
        ref={dialogRef}
        className="credential-modal-card"
        aria-labelledby="modal-credential-title"
        {...{ closedby: 'any' }}
        onClose={() => setSelectedCredential(null)}
        onPointerDown={(event) => { pressedOutside.current = isOutside(event) }}
        onPointerUp={(event) => {
          if (!('closedBy' in HTMLDialogElement.prototype) && pressedOutside.current && isOutside(event)) event.currentTarget.close()
          pressedOutside.current = false
        }}
      >
        <div className="credential-modal-header">
          <div>
            <h2 id="modal-credential-title">{selectedCredential.title}</h2>
            {selectedCredential.date ? <p>{selectedCredential.date}</p> : null}
            {selectedCredential.detail ? <p>{selectedCredential.detail}</p> : null}
            {selectedCredential.credentialId ? (
              <p className="credential-id">Credential ID: {selectedCredential.credentialId}</p>
            ) : null}
          </div>
          <button
            type="button"
            className="credential-modal-close"
            onClick={() => dialogRef.current?.close()}
            autoFocus
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
      </dialog>
  ) : null

  return { openCredential, modal }
}
