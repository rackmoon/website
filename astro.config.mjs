import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.rackmoon.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', zh: 'zh-CN' } },
    }),
  ],
});
