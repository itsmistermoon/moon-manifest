/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#0d1117',
          surface: '#161b22',
          border: '#30363d',
          line: '#222225',
        },
        accent: {
          blue: '#556af3',
          purple: '#8b5cf6',
          yellow: '#e3b341',
        },
      },
    },
  },
  plugins: [],
};
