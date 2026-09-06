import type { Metadata } from 'next'

import { About, AboutCta } from '@/components/about'
import { PageFrame } from '@/components/page-frame'
import { TechnicalFocus } from '@/components/technical-focus'

export const metadata: Metadata = {
  title: 'Background | Ron Vincent Cada',
  description: 'Education, technical focus, and background of Ron Vincent Cada.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <PageFrame>
      <About />
      <TechnicalFocus />
      <AboutCta />
    </PageFrame>
  )
}
