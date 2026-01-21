import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://karin-santamaria.vercel.app',
  output: 'static',
  adapter: vercel(),
  integrations: [
    vue(),
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
