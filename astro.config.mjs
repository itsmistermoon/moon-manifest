import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://jparmstrong.vercel.app',
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel(),
});
