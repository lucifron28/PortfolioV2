import type { MetadataRoute } from 'next'

const baseUrl = 'https://ron-cada-portfolio.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
