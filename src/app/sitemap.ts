import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.advancedpowerinfra.com'
    const pages = [
        '',
        '/about',
        '/services',
        '/rental',
        '/sales',
        '/projects',
        '/team',
        '/contact',
    ]

    return pages.map((page) => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: page === '' ? 1 : 0.8,
    }))
}
