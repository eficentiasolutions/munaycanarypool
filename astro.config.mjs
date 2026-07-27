import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.munaycanarypool.es',
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => ![
        'https://www.munaycanarypool.es/gracias/',
        'https://www.munaycanarypool.es/cookies/',
        'https://www.munaycanarypool.es/aviso-legal/',
        'https://www.munaycanarypool.es/privacidad/',
      ].includes(page),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [],
    }),
  ],
});
