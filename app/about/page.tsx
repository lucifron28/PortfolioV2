import type { Metadata } from 'next'

import { About } from '@/components/about'
import { PageFrame } from '@/components/page-frame'
import { TechnicalFocus } from '@/components/technical-focus'

export const metadata: Metadata = {
  title: 'About | Ron Vincent Cada',
  description: 'About Ron Vincent Cada, his education, and technical skills.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <PageFrame>
      <About />
      <TechnicalFocus />
    </PageFrame>
  )
}
