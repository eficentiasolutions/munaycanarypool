import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

import { fileURLToPath } from 'node:url';

export default defineConfig({
  vite: {
    resolve: {
      alias: [
        { find: /^lucide-react$/, replacement: fileURLToPath(new URL('./src/lib/lucide-shim.ts', import.meta.url)) },
      ],
    },
  },
  site: 'https://www.munaycanarypool.es',
  output: 'static',
  adapter: cloudflare(),
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
