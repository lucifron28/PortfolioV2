'use client'

import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'

const workflow = `flowchart TD
    A["GSD Creates PM Schedule"]
    B["Inspector Identifies Asset<br/>and Completes Inspection"]
    C["Save Completed Inspection<br/>Server Records Completion Time"]
    D["Add Inspection to Digital PM Form"]
    E["Submit PM Form"]
    F["Department Head Acknowledges Form"]
    G["Inspection Enters Official Maintenance History"]
    H{"Is the Asset<br/>Non-Operational?"}
    I["No Corrective Follow-Up Required"]
    J["Finding and Recommendation Recorded"]
    K["GSD / Authorized Supervisor<br/>Records WMS PM Number"]
    L["Referred to Existing WMS"]
    A --> B --> C --> D --> E --> F --> G --> H
    H -->|No| I
    H -->|Yes| J --> K --> L`

export function MaintenanceWorkflow() {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
  const [svg, setSvg] = useState('')
  const [zoom, setZoom] = useState(1)
  const [expanded, setExpanded] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null)

  useEffect(() => {
    let active = true
    async function render() {
      try {
        const { default: mermaid } = await import('mermaid')
        mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'base', themeVariables: { primaryColor: '#19191f', primaryTextColor: '#f8f8f2', primaryBorderColor: '#777987', lineColor: '#b7bdd5', secondaryColor: '#19191f', tertiaryColor: '#101014', edgeLabelBackground: '#101014', fontFamily: 'Arial, sans-serif', fontSize: '16px' }, flowchart: { htmlLabels: true, useMaxWidth: false, nodeSpacing: 28, rankSpacing: 32 } })
        const result = await mermaid.render(`maintenance${id}`, workflow)
        if (active) setSvg(result.svg)
      } catch {
        // The accessible workflow description remains available if rendering fails.
      }
    }
    void render()
    return () => { active = false }
  }, [id])

  return (
    <>
      <h2>UniPM Maintenance Workflow</h2>
      <p>UniPM follows the department&apos;s preventive maintenance process. The workflow separates inspection completion from form acknowledgement and corrective maintenance follow-up.</p>
      <div className="maintenance-preview">
        {svg ? <>
          <div className="maintenance-controls" aria-label="Diagram zoom controls">
            <button type="button" onClick={() => setZoom(value => Math.max(1, value - 0.5))} disabled={zoom === 1} aria-label="Zoom out">−</button>
            <span>{Math.round(zoom * 100)}%</span>
            <button type="button" onClick={() => setZoom(value => Math.min(6, value + 0.5))} disabled={zoom === 6} aria-label="Zoom in">+</button>
            <button type="button" onClick={() => setZoom(1)}>Reset</button>
            <button type="button" onClick={() => { setZoom(4); setExpanded(true); dialogRef.current?.showModal() }}>Expand diagram</button>
          </div>
          <p className="maintenance-hint">Zoom in, then drag or use arrow keys to explore.</p>
          <div className="maintenance-viewport" role="region" aria-label="Scrollable maintenance workflow diagram" tabIndex={0}
            onPointerDown={event => { if (event.button !== 0) return; const el = event.currentTarget; drag.current = { x: event.clientX, y: event.clientY, left: el.scrollLeft, top: el.scrollTop }; el.setPointerCapture(event.pointerId) }}
            onPointerMove={event => { if (!drag.current) return; event.currentTarget.scrollLeft = drag.current.left - (event.clientX - drag.current.x); event.currentTarget.scrollTop = drag.current.top - (event.clientY - drag.current.y) }}
            onPointerUp={() => { drag.current = null }} onPointerCancel={() => { drag.current = null }}>
            {!expanded ? <div className="maintenance-preview-image" style={{ '--workflow-zoom': zoom } as CSSProperties} aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} /> : null}
          </div>
        </> : null}
        <p className={svg ? 'sr-only' : undefined}>GSD creates a preventive maintenance schedule. The inspector identifies the asset and completes the inspection. The server records the completion time when it accepts the save. The inspection is added to a digital form, submitted, and acknowledged by the department head before entering official maintenance history. If the asset is operational, no corrective follow-up is required. If it is non-operational, the finding and recommendation are recorded, GSD or an authorized supervisor records the WMS PM number, and the matter is referred to the existing WMS.</p>
      </div>
      <dialog ref={dialogRef} className="credential-modal-card maintenance-modal" aria-labelledby="maintenance-modal-title" onClose={() => { setExpanded(false); setZoom(1) }}>
        <div className="credential-modal-header"><h2 id="maintenance-modal-title">UniPM Maintenance Workflow</h2><button type="button" className="credential-modal-close" aria-label="Close diagram" autoFocus onClick={() => dialogRef.current?.close()}>×</button></div>
        <div className="maintenance-controls maintenance-modal-controls" aria-label="Expanded diagram zoom controls">
          <button type="button" onClick={() => setZoom(value => Math.max(1, value - 0.5))} disabled={zoom === 1} aria-label="Zoom out">−</button>
          <span>{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom(value => Math.min(6, value + 0.5))} disabled={zoom === 6} aria-label="Zoom in">+</button>
          <button type="button" onClick={() => setZoom(1)}>Reset</button>
        </div>
        <div className="maintenance-diagram maintenance-viewport" role="region" aria-label="Maintenance workflow canvas; drag or use arrow keys to pan" tabIndex={0}
          onPointerDown={event => { if (event.button !== 0) return; const el = event.currentTarget; drag.current = { x: event.clientX, y: event.clientY, left: el.scrollLeft, top: el.scrollTop }; el.setPointerCapture(event.pointerId) }}
          onPointerMove={event => { if (!drag.current) return; event.currentTarget.scrollLeft = drag.current.left - (event.clientX - drag.current.x); event.currentTarget.scrollTop = drag.current.top - (event.clientY - drag.current.y) }}
          onPointerUp={() => { drag.current = null }} onPointerCancel={() => { drag.current = null }}>
          {expanded && svg ? <div className="maintenance-preview-image" style={{ '--workflow-zoom': zoom } as CSSProperties} aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} /> : null}
        </div>
      </dialog>
    </>
  )
}
