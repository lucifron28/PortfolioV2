import type { MetadataRoute } from 'next'

import { selectedProjects } from '@/content/projects'

const baseUrl = 'https://ron-cada-portfolio.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: 'monthly', priority: 1 },
    ...['portfolio', 'about', 'credentials', 'contact'].map((path) => ({
      url: baseUrl + '/' + path,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...selectedProjects.map((project) => ({
      url: baseUrl + '/work/' + project.id,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
