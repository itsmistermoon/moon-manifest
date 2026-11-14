/** Mapa único de íconos usados en el sitio. `kind` decide los atributos del <svg>
 *  wrapper en Icon.astro: 'stroke' (Lucide, outline) vs 'fill' (logos de marca). */
export interface IconDef {
  viewBox: string;
  kind: 'stroke' | 'fill';
  /** innerHTML del <svg> tal cual (copiado del ícono original) — soporta cualquier
   *  mezcla de <path>/<rect>/<circle> sin modelar cada tag por separado. */
  inner: string;
}

export const icons: Record<string, IconDef> = {
  'arrow-right': {
    viewBox: '0 0 24 24',
    kind: 'stroke',
    inner: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  },
  'external-link': {
    viewBox: '0 0 24 24',
    kind: 'stroke',
    inner:
      '<path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/>',
  },
  'chevron-right': {
    viewBox: '0 0 24 24',
    kind: 'stroke',
    inner: '<path d="m9 18 6-6-6-6"/>',
  },
  'file-text': {
    viewBox: '0 0 24 24',
    kind: 'stroke',
    inner:
      '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/>',
  },
  mail: {
    viewBox: '0 0 24 24',
    kind: 'stroke',
    inner: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  },
  phone: {
    viewBox: '0 0 24 24',
    kind: 'stroke',
    inner:
      '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  },
  'map-pin': {
    viewBox: '0 0 24 24',
    kind: 'stroke',
    inner:
      '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  },
};

export type IconName = keyof typeof icons;
