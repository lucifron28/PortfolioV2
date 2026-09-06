import type { Metadata } from 'next'

import { Credentials } from '@/components/credentials'
import { PageFrame } from '@/components/page-frame'

export const metadata: Metadata = {
  title: 'Credentials | Ron Vincent Cada',
  description: 'Awards, certifications, and training completed by Ron Vincent Cada.',
  alternates: { canonical: '/credentials' },
}

export default function CredentialsPage() {
  return <PageFrame><Credentials /></PageFrame>
}
