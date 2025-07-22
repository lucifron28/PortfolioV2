import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ron Vincent Cada - Full-Stack Web & Mobile Developer',
  description: 'Full-stack web and mobile developer from the Philippines specializing in Next.js, React, Django, Flutter, and modern web technologies. Open to internship opportunities and collaborations.',
  keywords: 'Ron Vincent Cada, Full-stack developer, Web developer, Mobile developer, React, Next.js, Django, Flutter, Philippines developer, Frontend developer, Backend developer, Software engineer',
  authors: [{ name: 'Ron Vincent Cada' }],
  creator: 'Ron Vincent Cada',
  publisher: 'Ron Vincent Cada',
  robots: 'index, follow',
  metadataBase: new URL('https://ron-cada-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ron-cada-portfolio.vercel.app',
    title: 'Ron Vincent Cada - Full-Stack Web & Mobile Developer',
    description: 'Full-stack web and mobile developer from the Philippines specializing in Next.js, React, Django, Flutter, and modern web technologies. Open to internship opportunities and collaborations.',
    siteName: 'Ron Vincent Cada Portfolio',
    images: [
      {
        url: '/ron.jpg',
        width: 400,
        height: 400,
        alt: 'Ron Vincent Cada - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ron Vincent Cada - Full-Stack Web & Mobile Developer',
    description: 'Full-stack web and mobile developer from the Philippines specializing in Next.js, React, Django, and Flutter. Open to internship opportunities.',
    creator: '@aeuxial',
    images: ['/ron.jpg'],
  },
  verification: {
    google: 'mRGMIHxTxJmaNykLq5kCBRk_zHHPDujn9Qw1cCTfKiY',
    other: {
      'msvalidate.01': '6299C8E535C59E0955DC49DB96407BDF',
    },
  },
  other: {
    'theme-color': '#8BE9FD',
    'msapplication-TileColor': '#8BE9FD',
    'application-name': 'Ron Vincent Cada Portfolio',
    'sitemap': '/sitemap.xml',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ron Vincent Cada",
    "jobTitle": "Full-Stack Web & Mobile Developer",
    "description": "Full-stack web and mobile developer from the Philippines specializing in Next.js, React, Django, Flutter, and modern web technologies. Open to internship opportunities and collaborations.",
    "url": "https://ron-cada-portfolio.vercel.app",
    "image": "https://ron-cada-portfolio.vercel.app/ron.jpg",
    "sameAs": [
      "https://github.com/lucifron28",
      "https://www.linkedin.com/in/ron-vincent-cada-a939282a7/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Philippines"
    },
    "email": "cronvincent@gmail.com",
    "knowsAbout": [
      "Web Development",
      "Mobile Development",
      "React",
      "Next.js",
      "Django",
      "Django REST Framework",
      "Dart",
      "Flutter",
      "JavaScript",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "TypeScript",
      "PostgreSQL"
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
