import { getCollection } from 'astro:content';
import { routes, type Locale } from './routes';

export const adrBase = { es: `${routes.proyecto.es}/adr`, en: `${routes.proyecto.en}/adr` } satisfies Record<Locale, string>;

/** URL de un ADR en un idioma, a partir de su slug. */
export const adrHref = (locale: Locale, slug: string) => `${adrBase[locale]}/${slug}`;

export const getAdrs = (locale: Locale) => getCollection('adr', (entry) => entry.data.locale === locale);
