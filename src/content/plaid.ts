/** Datos invariantes al idioma. */
export const demoUrl = 'https://plaid-ui-kit.vercel.app/';
export const kitUrl = 'https://plaid-ui-kit.vercel.app/componentes';
export const repoUrl = 'https://github.com/itsmistermoon/plaid-ui-kit';

export const iclubUrl = 'https://www.behance.net/gallery/43812871/iClub-Interactive-menu-for-restaurants-on-tablets';

export const stack = ['Vite', 'React 19', 'TypeScript', 'UI SDK', 'wouter', 'zustand', 'Vitest', 'Playwright', 'Biome', 'Vercel'];

/** Capturas de la demo y del kit a 1440 px de ancho, en las dos pieles. */
export const screens = [
  { id: 'demo-comensal-plaid', width: 1440, height: 900 },
  { id: 'demo-garzon-plaid', width: 1440, height: 900 },
  { id: 'demo-garzon-slate', width: 1440, height: 900 },
  { id: 'kit-plaid', width: 1440, height: 900 },
  { id: 'kit-slate', width: 1440, height: 900 },
] as const;

/** Pantallas del diseño original de iClub (2011), a 1024 × 600 como la tablet. */
export const originScreens = [
  { id: 'iclub-2011-inicio', width: 1024, height: 600 },
  { id: 'iclub-2011-menu', width: 1024, height: 600 },
] as const;

export const plaid = {
  es: {
    title: 'Plaid UI Kit · Caso de estudio · Juan Pablo Armstrong',
    description: 'Plaid UI Kit: un kit de componentes y una app de restaurante que reconstruyen iClub, una app de pedidos que diseñé en 2011. Diseño, código y pruebas de Juan Pablo Armstrong.',
    kicker: 'Caso de estudio · Kit de UI y demo · Código abierto',
    heroTitle: 'Plaid UI Kit',
    heroSubtitle: 'Un kit de componentes y un restaurante completo hecho con él. Diseñé y programé los dos.',
    links: [
      { label: 'Abrir la demo', href: demoUrl },
      { label: 'Ver el kit', href: kitUrl },
      { label: 'Código en GitHub', href: repoUrl },
    ],
    badges: ['[ CÓDIGO ABIERTO ]', '63 pruebas unitarias', '16 specs de Playwright', 'ES / EN'],
    origin: {
      label: 'El origen',
      text: [
        'iClub fue una app Android para pedir desde la mesa en restaurantes, con tablets. Entre diciembre de 2011 y abril de 2012 diseñé toda su interfaz como diseñador UI freelance.',
        'Catorce años después la reconstruí, esta vez también con el código. Mantuve el estilo de entonces, el esqueumorfismo: pantallas que imitan materiales reales como la madera, el cuero o la tela, con relieve y sombras. Era el estilo habitual antes de que se impusiera el diseño plano.',
      ],
      screens: {
        'iclub-2011-inicio': { alt: 'Pantalla de inicio de iClub en 2011: fondo de madera, botones de Menú, Tragos y Promos, y barra inferior con Opciones, Perfil y Garzón.' },
        'iclub-2011-menu': { alt: 'Carta de iClub en 2011: lista de sándwiches con foto, ingredientes, precio y casilla para elegir, sobre fondo de madera.' },
      },
      caption: 'Diseño original, 2011',
      linkLabel: 'Ver iClub en Behance',
    },
    what: {
      label: 'Qué hay',
      demo: { title: 'Restaurant El Clan', text: 'La demo. El comensal pide desde la mesa, sigue su pedido y paga la cuenta (propina y división incluidas). El garzón ve la sala, mueve y une mesas y cobra. La cocina recibe las comandas en un riel. Hay libro de reservas, pizarra de especiales y paleta de comandos (⌘K).' },
      kit: { title: 'Plaid UI Kit', text: 'La galería de componentes: 27 paneles que muestran cada pieza en todos sus estados y qué componente de UI SDK usa por dentro. Incluye un diseñador de tartán para armar el patrón escocés que da nombre al kit.' },
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
      'Los tokens llevan nombres de telar cuando el nombre describe bien lo que hacen: urdimbre (--warp), trama (--weft), orilla (--selvedge), costura (--stitch) e hilos para cada tipo de llamado.',
      'Las reglas están escritas en DESIGN.md, cada una con su razón.',
    ],
    builtLabel: 'Cómo está hecho',
    built: [
      'Vite, React 19 y TypeScript. UI SDK de Vercel aporta el comportamiento accesible (menús, diálogos, tooltips, toasts, selects, campos numéricos, paleta de comandos); Plaid pone solo la apariencia.',
      'Las pruebas también revisan el diseño. Playwright mide la posición y el tamaño de los controles en cada piel, idioma y modo claro u oscuro, y un test falla si aparece un color que no sale de los tokens.',
    ],
    shows: {
      label: 'Qué muestra',
      items: [
        'La interfaz de 2011 y su reconstrucción son mías, del diseño al código.',
        'Reglas de diseño comprobadas en cada cambio: 63 pruebas unitarias y 16 specs de Playwright que miden el layout.',
        'Un kit completo: 27 paneles en la galería, dos pieles y dos idiomas, español e inglés.',
      ],
      cloud: 'Mi trabajo en cloud está en VecinoClub, una plataforma serverless en producción en AWS.',
      cloudLink: 'Ver el caso VecinoClub',
    },
    stackLabel: 'Stack',
    crumb: 'Plaid UI Kit',
    footerCta: 'Abrir la demo',
  },
  en: {
    title: 'Plaid UI Kit · Case Study · Juan Pablo Armstrong',
    description: 'Plaid UI Kit: a component kit and a restaurant app that rebuild iClub, an ordering app I designed in 2011. Design, code and tests by Juan Pablo Armstrong.',
    kicker: 'Case study · UI kit and demo · Open source',
    heroTitle: 'Plaid UI Kit',
    heroSubtitle: 'A component kit and a complete restaurant built with it. I designed and coded both.',
    links: [
      { label: 'Open the demo', href: demoUrl },
      { label: 'View the kit', href: kitUrl },
      { label: 'Code on GitHub', href: repoUrl },
    ],
    badges: ['[ OPEN SOURCE ]', '63 unit tests', '16 Playwright specs', 'ES / EN'],
    origin: {
      label: 'The origin',
      text: [
        'iClub was an Android app for ordering from the table in restaurants, on tablets. From December 2011 to April 2012 I designed its whole interface as a freelance UI designer.',
        'Fourteen years later I rebuilt it, this time writing the code as well. I kept the style of the time, skeuomorphism: screens that imitate real materials like wood, leather or cloth, with depth and shadows. It was the usual look before flat design took over.',
      ],
      screens: {
        'iclub-2011-inicio': { alt: 'iClub home screen in 2011: wood background, Menu, Drinks and Promos buttons, and a bottom bar with Options, Profile and Waiter.' },
        'iclub-2011-menu': { alt: 'iClub menu in 2011: a list of sandwiches with photo, ingredients, price and a checkbox to pick each one, on a wood background.' },
      },
      caption: 'Original design, 2011',
      linkLabel: 'See iClub on Behance',
    },
    what: {
      label: 'What’s in it',
      demo: { title: 'Restaurant El Clan', text: 'The demo. The diner orders from the table, follows the order and pays the bill (tip and split included). The waiter sees the floor, moves and joins tables, and takes payment. The kitchen gets tickets on a rail. There is a reservation book, a specials board and a command palette (⌘K).' },
      kit: { title: 'Plaid UI Kit', text: 'The component gallery: 27 panels that show every piece in all its states and which UI SDK component it uses underneath. It includes a tartan designer to build the plaid pattern the kit is named after.' },
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
      'Tokens take weaving names when the name describes what they do: warp (--warp), weft (--weft), selvedge (--selvedge), stitch (--stitch) and threads for each kind of call.',
      'The rules are written down in DESIGN.md, each with its reason.',
    ],
    builtLabel: 'How it’s built',
    built: [
      'Vite, React 19 and TypeScript. Vercel’s UI SDK provides the accessible behavior (menus, dialogs, tooltips, toasts, selects, number fields, command palette); Plaid only adds the look.',
      'The tests check the design too. Playwright measures the position and size of controls in every skin, language and light or dark mode, and one test fails if a color does not come from the tokens.',
    ],
    shows: {
      label: 'What it shows',
      items: [
        'The 2011 interface and its rebuild are both mine, from design to code.',
        'Design rules checked on every change: 63 unit tests and 16 Playwright specs that measure the layout.',
        'A complete kit: 27 panels in the gallery, two skins and two languages, Spanish and English.',
      ],
      cloud: 'My cloud work is VecinoClub, a serverless platform running in production on AWS.',
      cloudLink: 'Read the VecinoClub case',
    },
    stackLabel: 'Stack',
    crumb: 'Plaid UI Kit',
    footerCta: 'Open the demo',
  },
};
