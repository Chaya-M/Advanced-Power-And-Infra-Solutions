import { MetadataRoute } from 'next'
import { COMPANY_INFO } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_INFO.name,
    short_name: 'APIS',
    description: 'Premier Diesel Generator Solutions - Sales, Rental, and Maintenance',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#00df82',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
