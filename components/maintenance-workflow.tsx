'use client'

import { useEffect, useId, useState } from 'react'

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

  useEffect(() => {
    let active = true
    async function render() {
      try {
        const { default: mermaid } = await import('mermaid')
        mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'base', themeVariables: { primaryColor: '#f1f1ef', primaryTextColor: '#171717', primaryBorderColor: '#505050', lineColor: '#505050', secondaryColor: '#e4e4e1', tertiaryColor: '#f1f1ef', fontFamily: 'Arial, sans-serif', fontSize: '16px' }, flowchart: { htmlLabels: true, useMaxWidth: false, nodeSpacing: 28, rankSpacing: 32 } })
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
      <div className="maintenance-diagram" role="region" aria-label="Maintenance workflow diagram" tabIndex={0}>
        {svg ? <div aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} /> : null}
        <p className={svg ? 'sr-only' : undefined}>GSD creates a preventive maintenance schedule. The inspector identifies the asset and completes the inspection. The server records the completion time when it accepts the save. The inspection is added to a digital form, submitted, and acknowledged by the department head before entering official maintenance history. If the asset is operational, no corrective follow-up is required. If it is non-operational, the finding and recommendation are recorded, GSD or an authorized supervisor records the WMS PM number, and the matter is referred to the existing WMS.</p>
      </div>
    </>
  )
}
