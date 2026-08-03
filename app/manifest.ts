import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0EA5E9',
    theme_color: '#0EA5E9',
    orientation: 'portrait',
    icons: [
      // Next.js generates these PNGs from app/icon.tsx /
      // app/apple-icon.tsx / app/favicon.tsx — they auto-route at
      // /icon and /apple-icon so the SPA install icon stays consistent
      // with the brand without bundling dozens of static files.
      { src: '/icon', sizes: '72x72', type: 'image/png' },
      { src: '/icon', sizes: '96x96', type: 'image/png' },
      { src: '/icon', sizes: '128x128', type: 'image/png' },
      { src: '/icon', sizes: '144x144', type: 'image/png' },
      { src: '/icon', sizes: '152x152', type: 'image/png' },
      { src: '/icon', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/icon', sizes: '384x384', type: 'image/png' },
      { src: '/icon', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}