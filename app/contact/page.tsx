import type { Metadata } from 'next'

import { Contact } from '@/components/contact'
import { PageFrame } from '@/components/page-frame'

export const metadata: Metadata = {
  title: 'Get in touch | Ron Vincent Cada',
  description: 'Contact Ron Vincent Cada about development opportunities, collaboration, and project inquiries.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return <PageFrame><Contact /></PageFrame>
}
