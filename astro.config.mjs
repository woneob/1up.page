import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'path';

export default defineConfig({
  site: 'https://1up.page',
  base: '/',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
  vite: {
    resolve: {
      alias: {
        '~/': path.resolve('./src') + '/',
      }
    }
  }
});

