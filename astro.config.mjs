import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://munaycanarypool.es',
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => ![
        'https://munaycanarypool.es/gracias/',
        'https://munaycanarypool.es/cookies/',
        'https://munaycanarypool.es/aviso-legal/',
        'https://munaycanarypool.es/privacidad/',
      ].includes(page),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [],
    }),
  ],
});
