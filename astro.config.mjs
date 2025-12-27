import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://github.com/amplifycreativelab',
  base: '/one-page-sprint-demo',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
