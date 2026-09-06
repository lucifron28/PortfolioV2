import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { PageFrame } from '@/components/page-frame'

export const metadata: Metadata = {
  title: 'Not found | Ron Vincent Cada',
}

export default function NotFound() {
  return (
    <PageFrame>
      <section className="container-shell section-space" aria-labelledby="not-found-title">
        <div className="section-heading">
          <p className="eyebrow">404 / Not found</p>
          <h1 id="not-found-title" className="section-title">This page does not exist.</h1>
          <p className="section-intro">The address may be outdated or mistyped. Every project and case study lives on the work page.</p>
        </div>
        <Link className="all-projects-link" href="/portfolio">
          Back to the project list <ArrowRight aria-hidden="true" size={17} />
        </Link>
      </section>
    </PageFrame>
  )
}
