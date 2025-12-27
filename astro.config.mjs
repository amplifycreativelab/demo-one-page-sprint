import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://amplifycreativelab.github.io',
  base: '/demo-one-page-sprint',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
