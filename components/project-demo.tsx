'use client'

import { useId, useRef, useState } from 'react'

export function ProjectDemo() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const [open, setOpen] = useState(false)

  function openDemo() {
    setOpen(true)
    dialogRef.current?.showModal()
  }

  return (
    <>
      <button type="button" className="project-demo-link" onClick={openDemo}>Watch demo</button>
      <dialog ref={dialogRef} className="credential-modal-card project-demo-modal" aria-labelledby={titleId} onClose={() => setOpen(false)}>
        <div className="credential-modal-header">
          <h2 id={titleId}>UniPM demo</h2>
          <button type="button" className="credential-modal-close" aria-label="Close video" autoFocus onClick={() => dialogRef.current?.close()}>×</button>
        </div>
        {open ? (
          <iframe
            className="project-demo-video"
            src="https://www.youtube.com/embed/Q4TEkDZjKfE"
            title="UniPM project demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : null}
      </dialog>
    </>
  )
}
