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
          bg: '#16161e',
          surface: '#161b22',
          border: '#2e3147',
          line: '#2e3147',
          hover: '#1a1b26',
        },
        accent: {
          blue: '#7aa2f7',
          purple: '#8b5cf6',
          yellow: '#e0af68',
          'yellow-light': '#ebcb9d',
        },
        ink: {
          DEFAULT: '#c0caf5',
          muted: '#828bb8',
          dim: '#404767',
        },
      },
    },
  },
  plugins: [],
};
