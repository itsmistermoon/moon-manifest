/** Fuente única de las URLs por locale. El español vive en la raíz sin prefijo;
 *  el inglés vive bajo /en. */
export type Locale = 'es' | 'en';

export const routes = {
  home: { es: '/', en: '/en' },
  cv: { es: '/cv', en: '/en/cv' },
  proyecto: { es: '/proyecto', en: '/en/project' },
} satisfies Record<string, Record<Locale, string>>;

export const navLabels = {
  home: { es: 'Inicio', en: 'Home' },
  proyecto: { es: 'Caso de estudio', en: 'Case study' },
  cv: { es: 'CV', en: 'CV' },
};

// Orden real del nav (Inicio → Caso de estudio → CV) — no depende del orden
// de declaración de `routes`, que es alfabético/arbitrario.
const navOrder: (keyof typeof routes)[] = ['home', 'proyecto', 'cv'];

/** Bloque `links` de MobileNav — un solo lugar para las 3 rutas de nav site-wide. */
export function navLinks(locale: Locale, current: keyof typeof routes) {
  return navOrder.map((key) => ({
    href: routes[key][locale],
    label: navLabels[key][locale],
    current: key === current || undefined,
  }));
}
