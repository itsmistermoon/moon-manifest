/** @type {import('tailwindcss').Config} */
export default {
  future: { hoverOnlyWhenSupported: true },
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
          bg: '#1a1b26',
          surface: '#15161e',
          border: '#414868',
          line: '#414868',
          hover: '#283457',
        },
        accent: {
          blue: '#7aa2f7',
          purple: '#bb9af7',
          yellow: '#e0af68',
          'yellow-light': '#e0af68',
        },
        ink: {
          DEFAULT: '#c0caf5',
          muted: '#c0caf5',
          dim: '#a9b1d6',
        },
      },
    },
  },
  plugins: [],
};
