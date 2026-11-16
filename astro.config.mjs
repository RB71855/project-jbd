// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel'; // <-- Ganti dari node ke vercel

export default defineConfig({
  output: 'server',
  adapter: vercel(), // <-- Gunakan vercel()
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});