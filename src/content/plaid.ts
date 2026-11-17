/** Datos invariantes al idioma. */
export const demoUrl = 'https://plaid-ui-kit.vercel.app/';
export const kitUrl = 'https://plaid-ui-kit.vercel.app/componentes';
export const repoUrl = 'https://github.com/itsmistermoon/plaid';

export const stack = ['Vite', 'React 19', 'TypeScript', 'UI SDK', 'wouter', 'zustand', 'Vitest', 'Playwright', 'Biome', 'Vercel'];

/** Capturas de la demo y del kit a 1440 px de ancho, en las dos pieles. */
export const screens = [
  { id: 'demo-comensal-plaid', width: 1440, height: 900 },
  { id: 'demo-garzon-plaid', width: 1440, height: 900 },
  { id: 'demo-garzon-slate', width: 1440, height: 900 },
  { id: 'kit-plaid', width: 1440, height: 900 },
  { id: 'kit-slate', width: 1440, height: 900 },
] as const;

export const plaid = {
  es: {
    title: 'Plaid · Caso de estudio · Juan Pablo Armstrong',
    description: 'Caso de estudio de Plaid: un kit de componentes esqueumórficos sobre UI SDK y una demo de restaurante hecha con él.',
    kicker: 'Caso de estudio · Kit de UI y demo · Código abierto',
    heroTitle: 'Plaid',
    heroSubtitle: 'Un kit de componentes esqueumórficos y un restaurante completo hecho con él',
    links: [
      { label: 'Abrir la demo', href: demoUrl },
      { label: 'Ver el kit', href: kitUrl },
      { label: 'Código en GitHub', href: repoUrl },
    ],
    badges: ['[ CÓDIGO ABIERTO ]', '2 pieles', '3 roles'],
    origin: {
      label: 'El origen',
      // TODO [VERIFICAR]: año y rol de moon en iClub.
      text: 'iClub fue una app de pedidos para restaurantes en tablet. Plaid la reconstruye desde cero con herramientas actuales: la misma idea de pedir desde la mesa, con la estética de las interfaces de principios de los 2000, elegida a propósito.',
    },
    what: {
      label: 'Qué hay',
      demo: { title: 'Restaurant El Clan', text: 'La demo. El comensal pide desde la mesa, sigue su pedido y paga la cuenta (propina y división incluidas). El garzón ve la sala, mueve y une mesas y cobra. La cocina recibe las comandas en un riel. Hay libro de reservas, pizarra de especiales y paleta de comandos (⌘K).' },
      kit: { title: 'Plaid UI Kit', text: 'La galería de componentes. Cada pieza en todos sus estados, con los componentes de UI SDK que usa, y un diseñador de tartán.' },
    },
    gallery: {
      label: 'La demo y el kit',
      images: {
        'demo-comensal-plaid': { caption: 'Comensal · Plaid', alt: 'Demo de Plaid en la piel Plaid, vista del comensal en la Mesa 7 con la pizarra de especiales del día.' },
        'demo-garzon-plaid': { caption: 'Garzón · Plaid', alt: 'Demo de Plaid en la piel Plaid, vista del garzón con la sala principal y sus doce mesas.' },
        'demo-garzon-slate': { caption: 'Garzón · Slate', alt: 'Demo de Plaid en la piel Slate, vista del garzón con la sala principal y sus doce mesas.' },
        'kit-plaid': { caption: 'Kit · Plaid', alt: 'Galería de componentes de Plaid en la piel Plaid, con botón, botón flecha y ruleta de cantidad.' },
        'kit-slate': { caption: 'Kit · Slate', alt: 'Galería de componentes de Plaid en la piel Slate, con botón, botón flecha y ruleta de cantidad.' },
      },
    },
    designLabel: 'Decisiones de diseño',
    design: [
      'Dos pieles, Plaid (táctil) y Slate (plana, con modo claro y oscuro), sobre los mismos componentes. Cambiar de piel o de idioma nunca mueve ni cambia de tamaño un control.',
      'Un solo verde por tema; todo el resto de la paleta se deriva de él.',
      'Tokens con nombres textiles donde la metáfora es honesta: urdimbre (--warp), trama (--weft), orilla (--selvedge), costura (--stitch) e hilos para cada tipo de llamado.',
      'Las reglas viven en DESIGN.md, cada una con su porqué.',
    ],
    builtLabel: 'Cómo está hecho',
    built: [
      'Vite, React 19 y TypeScript. El comportamiento (menús, diálogos, tooltips, toasts, selects, campos numéricos, paleta de comandos) viene de UI SDK de Vercel; Plaid solo pone la piel.',
      'Pruebas que vigilan el diseño, no solo la lógica: Playwright mide posición y tamaño de los controles en cada piel, idioma y esquema, y un test rechaza cualquier color fuera de los tokens.',
      'Construido con agentes de IA bajo mi dirección: yo definí el diseño, las reglas y la revisión; los agentes implementaron en ramas y PRs revisados.',
    ],
    stackLabel: 'Stack',
    crumb: 'Plaid',
    footerCta: 'Abrir la demo',
  },
  en: {
    title: 'Plaid · Case Study · Juan Pablo Armstrong',
    description: 'Plaid case study: a skeuomorphic component kit built on UI SDK and a restaurant demo made with it.',
    kicker: 'Case study · UI kit and demo · Open source',
    heroTitle: 'Plaid',
    heroSubtitle: 'A skeuomorphic component kit and a complete restaurant built with it',
    links: [
      { label: 'Open the demo', href: demoUrl },
      { label: 'View the kit', href: kitUrl },
      { label: 'Code on GitHub', href: repoUrl },
    ],
    badges: ['[ OPEN SOURCE ]', '2 skins', '3 roles'],
    origin: {
      label: 'The origin',
      // TODO [VERIFICAR]: año y rol de moon en iClub.
      text: 'iClub was an ordering app for restaurants on tablets. Plaid rebuilds it from scratch with current tools: the same idea of ordering from the table, with the look of early-2000s interfaces, chosen on purpose.',
    },
    what: {
      label: 'What’s in it',
      demo: { title: 'Restaurant El Clan', text: 'The demo. The diner orders from the table, follows the order and pays the bill (tip and split included). The waiter sees the floor, moves and joins tables, and takes payment. The kitchen gets tickets on a rail. There is a reservation book, a specials board and a command palette (⌘K).' },
      kit: { title: 'Plaid UI Kit', text: 'The component gallery. Every piece in all its states, with the UI SDK components it uses, and a tartan designer.' },
    },
    gallery: {
      label: 'The demo and the kit',
      images: {
        'demo-comensal-plaid': { caption: 'Diner · Plaid', alt: 'Plaid demo in the Plaid skin, diner view at Table 7 with the specials board for the day.' },
        'demo-garzon-plaid': { caption: 'Waiter · Plaid', alt: 'Plaid demo in the Plaid skin, waiter view with the main floor and its twelve tables.' },
        'demo-garzon-slate': { caption: 'Waiter · Slate', alt: 'Plaid demo in the Slate skin, waiter view with the main floor and its twelve tables.' },
        'kit-plaid': { caption: 'Kit · Plaid', alt: 'Plaid component gallery in the Plaid skin, with button, arrow button and quantity roller.' },
        'kit-slate': { caption: 'Kit · Slate', alt: 'Plaid component gallery in the Slate skin, with button, arrow button and quantity roller.' },
      },
    },
    designLabel: 'Design decisions',
    design: [
      'Two skins, Plaid (tactile) and Slate (flat, with light and dark modes), on the same components. Switching skin or language never moves or resizes a control.',
      'A single green per theme; the rest of the palette is derived from it.',
      'Tokens with textile names where the metaphor is honest: warp (--warp), weft (--weft), selvedge (--selvedge), stitch (--stitch) and threads for each kind of call.',
      'The rules live in DESIGN.md, each with its reason.',
    ],
    builtLabel: 'How it’s built',
    built: [
      'Vite, React 19 and TypeScript. The behavior (menus, dialogs, tooltips, toasts, selects, number fields, command palette) comes from Vercel’s UI SDK; Plaid only adds the skin.',
      'Tests that guard the design, not just the logic: Playwright measures the position and size of controls in every skin, language and color scheme, and a test rejects any color outside the tokens.',
      'Built with AI agents under my direction: I defined the design, the rules and the review; the agents implemented in branches and reviewed PRs.',
    ],
    stackLabel: 'Stack',
    crumb: 'Plaid',
    footerCta: 'Open the demo',
  },
};
