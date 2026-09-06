import type { Metadata } from 'next'

import { Contact } from '@/components/contact'
import { PageFrame } from '@/components/page-frame'

export const metadata: Metadata = {
  title: 'Contact | Ron Vincent Cada',
  description: 'Contact Ron Vincent Cada about development internships and project work.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return <PageFrame><Contact /></PageFrame>
}
