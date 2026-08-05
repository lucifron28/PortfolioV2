'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'

import { skillGroups } from '@/content/portfolio'

export function TechnicalFocus() {
  const [active, setActive] = useState(0)
  return (
    <section className="container-shell section-space technical-section" aria-labelledby="focus-title">
      <div className="section-heading">
        <p className="eyebrow">Technical focus · working set</p>
        <h2 id="focus-title" className="section-title">Tools organized by the problems they solve.</h2>
      </div>
      <div className="technical-accordion">
        {skillGroups.map((group, index) => {
          const expanded = active === index
          return (
            <article key={group.title} className="technical-panel" data-expanded={expanded}>
              <button type="button" aria-expanded={expanded} aria-controls={`skill-panel-${index}`} onClick={() => setActive(index)}>
                <span className="technical-number">0{index + 1}</span><span>{group.title}</span><Plus aria-hidden="true" size={19} />
              </button>
              <div id={`skill-panel-${index}`} className="technical-panel-content" hidden={!expanded}>
                <p>{group.items.join(' · ')}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
