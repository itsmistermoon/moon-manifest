/** Fuente única de las URLs por locale. El español vive en la raíz sin prefijo;
 *  el inglés vive bajo /en. */
export type Locale = 'es' | 'en';

export const routes = {
  home: { es: '/', en: '/en' },
  cv: { es: '/cv', en: '/en/cv' },
  proyecto: { es: '/proyecto', en: '/en/project' },
} satisfies Record<string, Record<Locale, string>>;
