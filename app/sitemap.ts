import type { MetadataRoute } from 'next'

import { selectedProjects } from '@/content/projects'

const baseUrl = 'https://ron-cada-portfolio.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: 'monthly', priority: 1 },
    ...selectedProjects.map((project) => ({
      url: baseUrl + '/work/' + project.id,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
