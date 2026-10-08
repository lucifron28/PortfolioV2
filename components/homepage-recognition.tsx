'use client'

import Link from 'next/link'

import { awards } from '@/content/portfolio'
import { useCredentialViewer } from '@/components/use-credential-viewer'

export function HomepageRecognition() {
  const { openCredential, modal } = useCredentialViewer()

  return (
    <>
      <section className="recognition-section" aria-labelledby="recognition-title">
        <div className="section-inline-heading recognition-heading">
          <h2 id="recognition-title">Competition results &amp; recognition</h2>
          <Link href="/credentials">All awards</Link>
        </div>
        <div className="recognition-grid">
          {awards.slice(0, 4).map((award, index) => (
            <article
              key={award.id ?? award.title}
              className={'recognition-card' + (index === 0 ? ' recognition-card-primary' : '')}
            >
              <div className="recognition-card-heading">
                <p className="recognition-placement">{award.placement ?? award.title}</p>
                {award.year ? <span className="recognition-year">{award.year}</span> : null}
              </div>
              <h3>{award.event ?? award.title}</h3>
              {award.detail ? <p className="recognition-detail">{award.detail}</p> : null}
              {award.context ? <p className="recognition-context">{award.context}</p> : null}
              <div className="recognition-links">
                {award.image || award.supportingImages?.length ? (
                  <button
                    type="button"
                    aria-label={(award.imageLabel ?? 'View certificate') + ' for ' + award.title}
                    onClick={(event) => openCredential(award, event.currentTarget)}
                  >
                    {award.imageLabel ?? 'View certificate'}
                  </button>
                ) : null}
                {award.verificationUrl ? (
                  <a href={award.verificationUrl} target="_blank" rel="noreferrer">University article</a>
                ) : null}
                {!award.image && !award.supportingImages?.length && !award.verificationUrl ? (
                  <Link href={award.id ? '/credentials#' + award.id : '/credentials'}>Award details</Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
      {modal}
    </>
  )
}
