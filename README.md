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
├── cv.pdf            # CV descargable (ES), generado con `npm run cv`
└── en/cv.pdf         # CV descargable (EN), generado con `npm run cv`
```

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

El contenido del CV vive en `src/content/cv.ts` (ES y EN) y alimenta tanto la página web `/cv` como la versión de impresión `/cv/print` (una columna, legible por ATS). Tras editarlo, `npm run cv` regenera `public/cv.pdf` y `public/en/cv.pdf` con puppeteer; commitea los PDF junto con el cambio.
