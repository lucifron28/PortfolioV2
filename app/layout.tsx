import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const baseUrl = 'https://ron-cada-portfolio.vercel.app'
const description =
  'Backend-focused software engineering student building secure APIs, workflow systems, full-stack applications, and source-grounded AI features with ASP.NET Core, Python, React, SQL, and Docker.'

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ron Vincent Cada',
  url: baseUrl,
  image: `${baseUrl}/ron.jpg`,
  jobTitle: 'Backend-focused software engineering student',
  description,
  email: 'mailto:cronvincent@gmail.com',
  sameAs: ['https://github.com/lucifron28', 'https://www.linkedin.com/in/ron-vincent-cada/'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lucena City',
    addressCountry: 'Philippines',
  },
  knowsAbout: [
    'C#',
    'ASP.NET Core',
    'REST APIs',
    'Authentication and authorization',
    'SQL Server',
    'PostgreSQL',
    'React',
    'TypeScript',
    'Docker',
    'Python',
    'Django REST Framework',
    'Kotlin',
    'Jetpack Compose',
    'Retrieval-augmented generation',
    'OCR',
    'Whisper',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Ron Vincent Cada | Backend Software Engineering Student',
  description,
  applicationName: 'Ron Vincent Cada Portfolio',
  keywords: [
    'Ron Vincent Cada',
    'backend software engineering student',
    'ASP.NET Core',
    'C#',
    'REST APIs',
    'React',
    'PostgreSQL',
    'Docker',
  ],
  authors: [{ name: 'Ron Vincent Cada', url: baseUrl }],
  creator: 'Ron Vincent Cada',
  publisher: 'Ron Vincent Cada',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'Ron Vincent Cada | Backend Software Engineering Student',
    description,
    siteName: 'Ron Vincent Cada Portfolio',
    locale: 'en_PH',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ron Vincent Cada, Backend Software Engineering Student',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ron Vincent Cada | Backend Software Engineering Student',
    description,
    images: ['/opengraph-image'],
  },
  verification: {
    google: 'mRGMIHxTxJmaNykLq5kCBRk_zHHPDujn9Qw1cCTfKiY',
    other: {
      'msvalidate.01': '6299C8E535C59E0955DC49DB96407BDF',
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F3F3F0' },
    { media: '(prefers-color-scheme: dark)', color: '#0D0D0D' },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&amp;display=swap" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }} />
      </body>
    </html>
  )
}
