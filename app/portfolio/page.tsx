import type { Metadata } from 'next'

import { PageFrame } from '@/components/page-frame'
import { SelectedWork } from '@/components/selected-work'

export const metadata: Metadata = {
  title: 'Projects | Ron Vincent Cada',
  description: 'Selected backend, web, mobile, and full-stack projects by Ron Vincent Cada.',
  alternates: { canonical: '/portfolio' },
}

export default function PortfolioPage() {
  return <PageFrame><SelectedWork /></PageFrame>
}
