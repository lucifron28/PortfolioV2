'use client'

import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

import type { Credential } from '@/lib/portfolio-types'

export function ProofCarousel({ items }: { items: readonly Credential[] }) {
  const [index, setIndex] = useState(0)
  const item = items[index]
  const move = (direction: number) => setIndex((current) => (current + direction + items.length) % items.length)
  if (!item.media) return null
  return (
    <div className="proof-carousel">
      <div className="proof-media">
        <Image key={item.media.src} src={item.media.src} alt={item.media.alt} width={item.media.width} height={item.media.height} loading="lazy" sizes="(min-width: 1024px) 57vw, 92vw" />
      </div>
      <div className="proof-caption" aria-live="polite" aria-atomic="true">
        <p className="proof-count">Credential {index + 1} of {items.length}</p>
        <div><h3>{item.title}</h3>{item.detail ? <p>{item.detail}</p> : null}</div>
        <div className="proof-controls">
          <button type="button" className="icon-button" aria-label="Previous credential" onClick={() => move(-1)}><ArrowLeft aria-hidden="true" size={19} /></button>
          <button type="button" className="icon-button" aria-label="Next credential" onClick={() => move(1)}><ArrowRight aria-hidden="true" size={19} /></button>
        </div>
      </div>
    </div>
  )
}
