# moon-manifest

Sitio personal de Juan Pablo Armstrong — portafolio, CV y caso de estudio.

**Live:** https://jparmstrong.vercel.app

## Stack

- [Astro](https://astro.build) — generación estática
- [Tailwind CSS](https://tailwindcss.com) — estilos
- [Vercel](https://vercel.com) — deploy automático desde `main`

## Estructura

```
src/pages/
├── index.astro       # Home (ES)
├── cv.astro          # CV web (ES)
├── proyecto.astro    # Caso de estudio (ES)
└── en/               # Versión en inglés
    ├── index.astro
    ├── cv.astro
    └── project.astro

public/
├── cv.pdf            # CV descargable (ES)
└── en/cv.pdf         # CV descargable (EN)
```

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

Los CVs en PDF se generan desde `src/cv/cv-es.html` y `src/cv/cv-en.html` con Puppeteer.
