import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import { profileDescription } from '@/content/portfolio'
import './globals.css'

const baseUrl = 'https://ron-cada-portfolio.vercel.app'
const description = profileDescription

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ron Vincent Cada',
  url: baseUrl,
  image: baseUrl + '/ron.jpg',
  jobTitle: 'Full-stack developer focused on backend software development',
  description,
  email: 'mailto:cronvincent@gmail.com',
  sameAs: ['https://github.com/lucifron28', 'https://www.linkedin.com/in/ron-vincent-cada/'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mauban',
    addressRegion: 'Quezon',
    addressCountry: 'Philippines',
  },
  knowsAbout: [
    'C#',
    'ASP.NET Core',
    'Entity Framework Core',
    'ASP.NET Core Identity',
    'REST APIs',
    'Authentication and authorization',
    'SQL Server',
    'PostgreSQL',
    'SQLite',
    'Redis',
    'React',
    'TypeScript',
    'PHP',
    'Laravel',
    'Docker',
    'Python',
    'Django REST Framework',
    'Kotlin',
    'Jetpack Compose',
    'Flutter',
    'React Native',
    'Expo',
    'xUnit',
    'PHPUnit',
    'pytest',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Ron Vincent Cada | Backend-focused Full-stack Developer',
  description,
  applicationName: 'Ron Vincent Cada Portfolio',
  keywords: ['Ron Vincent Cada', 'BSIT student', 'full-stack developer', 'backend development', 'ASP.NET Core', 'C#', 'REST APIs', 'web and API security learning', 'React', 'PostgreSQL', 'Docker'],
  authors: [{ name: 'Ron Vincent Cada', url: baseUrl }],
  creator: 'Ron Vincent Cada',
  publisher: 'Ron Vincent Cada',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'Ron Vincent Cada | Backend-focused Full-stack Developer',
    description,
    siteName: 'Ron Vincent Cada Portfolio',
    locale: 'en_PH',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Ron Vincent Cada, backend-focused full-stack developer and BSIT student' }],
  },
  twitter: { card: 'summary_large_image', title: 'Ron Vincent Cada | Backend-focused Full-stack Developer', description, images: ['/opengraph-image'] },
  verification: { google: 'mRGMIHxTxJmaNykLq5kCBRk_zHHPDujn9Qw1cCTfKiY', other: { 'msvalidate.01': '6299C8E535C59E0955DC49DB96407BDF' } },
  icons: { icon: '/favicon.ico' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }} />
      </body>
    </html>
  )
}
