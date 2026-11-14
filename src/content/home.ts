/** Datos invariantes al idioma — hrefs externos, viven una sola vez. */
export const socialLinks = {
  email: 'mailto:j.p.armstrong@me.com',
  github: 'https://github.com/itsmistermoon',
  linkedin: 'https://www.linkedin.com/in/jparmstrong-dev/',
  behance: 'https://www.behance.net/itsmistermoon',
  mastodon: 'https://lile.cl/@itsmistermoon',
  platform: 'https://vecinoclub.cl',
  tokyoNight: 'https://github.com/tokyo-night/tokyo-night-vscode-theme',
};

export const skillsMeta = [
  { color: 'accent-blue' },
  { color: 'accent-purple' },
  { color: 'accent-yellow', full: true },
];

export const designProjectsMeta = [
  { image: 'https://mir-s3-cdn-cf.behance.net/projects/404/8d1ae943812871.Y3JvcCw2OTksNTQ3LDMwMiw0OA.jpeg', link: 'https://www.behance.net/gallery/43812871/iClub-Interactive-menu-for-restaurants-on-tablets' },
  { image: 'https://mir-s3-cdn-cf.behance.net/projects/404/6f6c3c91696533.Y3JvcCw4MTEsNjM0LDI5NSw4Mg.jpg', link: 'https://www.behance.net/gallery/91696533/Imaquinaria-Estudio' },
  { image: 'https://mir-s3-cdn-cf.behance.net/projects/404/24f1ea91699409.Y3JvcCw2MjIsNDg2LDY5MCw1NzE.jpg', link: 'https://www.behance.net/gallery/91699409/Cuarto-Mundo' },
];

export const home = {
  es: {
    title: 'Juan Pablo Armstrong · Cloud Engineer',
    landing: {
      homeLabel: 'Juan Pablo Armstrong, inicio',
      navLabel: 'Navegación principal',
      nav: { work: 'Trabajo', experience: 'Experiencia', design: 'Diseño', cv: 'CV' },
      eyebrow: 'Juan Pablo Armstrong, Cloud Engineer',
      heroTitle: ['Serverless', 'en producción'],
      heroLede: 'Diseño, despliego y opero VecinoClub en AWS, ya en un comercio real de Temuco: 0% de errores 5xx y 151 ms de latencia p50.',
      heroCta: 'Leer el caso VecinoClub',
      heroContact: 'Escribirme',
      heroFootnote: 'AWS Certified Cloud Practitioner · AWS Re/Start 2026 · Temuco, Chile.',
      proof: {
        label: 'Ver el caso de estudio VecinoClub',
        top: 'Un producto en producción',
        text: 'Una plataforma de fidelización para comercios locales, con Imaquinaria, tienda de manga y cultura japonesa en Temuco, como primer comercio.',
        stack: ['React 19', 'FastAPI', 'AWS'],
        bottom: 'Ver cómo se construyó',
      },
      capabilitiesLabel: 'Áreas de trabajo',
      capabilities: [
        { title: 'Lo llevo a producción', text: 'AWS serverless, CI/CD y observabilidad' },
        { title: 'Desarrollo el producto', text: 'Python, FastAPI, React y TypeScript' },
        { title: 'Diseño la experiencia', text: 'Interfaces e identidad visual' },
      ],
      work: {
        title: 'Fidelización que ya funciona en tienda',
        intro: 'El caso más completo de este portfolio muestra cómo conecto una necesidad de negocio con decisiones de producto y una arquitectura que ya opera en producción.',
        kicker: 'VecinoClub',
        heading: 'De compras ocasionales a una relación continua',
        evidenceLabel: 'Alcance del proyecto',
        evidence: [
          { label: 'Producto', text: 'Portal de clientes + panel de administración' },
          { label: 'Arquitectura', text: 'React, FastAPI, Lambda, DynamoDB y Cognito' },
          { label: 'Operación', text: 'CI/CD con GitHub Actions + AWS SAM; CloudWatch, X-Ray y alarmas SNS' },
          { label: 'Decisiones', text: '23 ADRs de arquitectura y costo' },
        ],
      },
      experience: {
        title: 'Experiencia',
        intro: 'Más de 10 años al frente de emprendimientos propios, de la web y el diseño a la nube. Ese recorrido me da criterio de producto y de costo, no solo de código.',
      },
      design: {
        title: 'La práctica visual detrás de mis interfaces',
        intro: 'Antes de programar trabajé en identidad, editorial e interfaces. Estos proyectos muestran la base visual que llevo al desarrollo de productos.',
      },
      contact: {
        title: 'Conversemos',
        text: 'Si mi experiencia encaja con lo que estás construyendo, puedes escribirme directamente.',
        cta: 'Enviar correo',
      },
      footer: 'Juan Pablo Armstrong · Temuco, Chile',
    },
    viewCv: 'Ver CV online',
    projectSection: { label: 'Proyecto Destacado', viewCaseStudy: 'Ver caso de estudio', viewPlatform: 'Ver VecinoClub' },
    projects: [
      {
        title: 'VecinoClub',
        subtitle: 'Plataforma SaaS de fidelización para comercios locales · En producción',
        description: 'Los clientes escanean un QR y consultan sellos y puntos sin instalar una app. Cada comercio configura beneficios, registra compras y consulta estadísticas. Diseñé y desplegué su arquitectura serverless multi-tenant con React, FastAPI y AWS; Imaquinaria es el primer comercio y banco de pruebas.',
        status: 'En Producción',
        statusColor: 'yellow',
        tags: ['AWS Lambda', 'FastAPI / Python', 'React 19 + TS', 'GitHub Actions'],
      },
    ],
    designSection: {
      label: 'Diseño Gráfico',
      intro: 'Antes de programar, diseñé. Trabajo en identidad visual, diseño editorial e interfaces desde 2014. Ese background informa cómo construyo productos: con criterio visual desde el primer commit.',
      viewFullPortfolio: 'Ver portfolio completo en Behance',
      imagePlaceholder: '[ imagen ]',
    },
    designProjects: [
      { title: 'iClub — Menú interactivo para restaurantes', category: 'UI/UX · App Tablet', description: 'Diseño de aplicación de menú para restaurantes en Android. Del mockup inicial al producto final: navegación de carta, pedidos y pagos desde la mesa.' },
      { title: 'Imaquinaria Estudio', category: 'Identidad Visual', description: 'Creación de identidad gráfica y aplicaciones de marca para Imaquinaria Estudio, estudio colaborativo con ilustradores locales, artesanos y productores.' },
      { title: 'Cuarto Mundo', category: 'Branding · Logo', description: 'Logotipo para Cuarto Mundo, medio especializado en cómics y cultura pop con presencia en prensa, web y redes sociales.' },
    ],
    footer: 'Temuco, Chile · Diseñado y construido con Astro & Tailwind · Paleta',
    footerLinks: { github: '[ GitHub ]', linkedin: '[ LinkedIn ]', behance: '[ Behance ]', mastodon: '[ Mastodon ]' },
  },
  en: {
    title: 'Juan Pablo Armstrong · Cloud Engineer',
    landing: {
      homeLabel: 'Juan Pablo Armstrong, home',
      navLabel: 'Main navigation',
      nav: { work: 'Work', experience: 'Experience', design: 'Design', cv: 'CV' },
      eyebrow: 'Juan Pablo Armstrong, Cloud Engineer',
      heroTitle: ['Serverless', 'in production'],
      heroLede: 'I design, deploy, and operate VecinoClub on AWS, live in a real shop in Temuco: 0% 5xx errors and 151 ms p50 latency.',
      heroCta: 'Read the VecinoClub case',
      heroContact: 'Write to me',
      heroFootnote: 'AWS Certified Cloud Practitioner · AWS Re/Start 2026 · Temuco, Chile.',
      proof: {
        label: 'View the VecinoClub case study',
        top: 'A product in production',
        text: 'A loyalty platform for local businesses, with Imaquinaria, a manga and Japanese culture shop in Temuco, as its first business.',
        stack: ['React 19', 'FastAPI', 'AWS'],
        bottom: 'See how it was built',
      },
      capabilitiesLabel: 'Areas of work',
      capabilities: [
        { title: 'I take it to production', text: 'AWS serverless, CI/CD, and observability' },
        { title: 'I build the product', text: 'Python, FastAPI, React, and TypeScript' },
        { title: 'I design the experience', text: 'Interfaces and visual identity' },
      ],
      work: {
        title: 'Loyalty that already works in store',
        intro: 'The most complete case in this portfolio shows how I connect a business need with product decisions and an architecture that already runs in production.',
        kicker: 'VecinoClub',
        heading: 'From occasional purchases to an ongoing relationship',
        evidenceLabel: 'Project scope',
        evidence: [
          { label: 'Product', text: 'Customer portal + admin panel' },
          { label: 'Architecture', text: 'React, FastAPI, Lambda, DynamoDB, and Cognito' },
          { label: 'Operations', text: 'CI/CD with GitHub Actions + AWS SAM; CloudWatch, X-Ray, and SNS alarms' },
          { label: 'Decisions', text: '23 architecture and cost ADRs' },
        ],
      },
      experience: {
        title: 'Experience',
        intro: '10+ years running my own businesses, from web and design to the cloud. That path gives me product and cost judgment, not just code.',
      },
      design: {
        title: 'The visual practice behind my interfaces',
        intro: 'Before coding I worked in identity, editorial, and interfaces. These projects show the visual foundation I bring to product development.',
      },
      contact: {
        title: 'Let’s talk',
        text: 'If my experience fits what you are building, you can write to me directly.',
        cta: 'Send an email',
      },
      footer: 'Juan Pablo Armstrong · Temuco, Chile',
    },
    viewCv: 'View CV online',
    projectSection: { label: 'Featured Project', viewCaseStudy: 'View case study', viewPlatform: 'View VecinoClub' },
    projects: [
      {
        title: 'VecinoClub',
        subtitle: 'Loyalty SaaS platform for local businesses · In production',
        description: 'Customers scan a QR code to check stamps and points without installing an app. Each business sets benefits, records purchases, and views statistics. I designed and deployed its multi-tenant serverless architecture with React, FastAPI, and AWS; Imaquinaria is the first business and proving ground.',
        status: 'Live',
        statusColor: 'yellow',
        tags: ['AWS Lambda', 'FastAPI / Python', 'React 19 + TS', 'GitHub Actions'],
      },
    ],
    designSection: {
      label: 'Graphic Design',
      intro: 'Before coding, I designed. I\'ve worked in visual identity, editorial design, and interfaces since 2014. That background informs how I build products: with visual judgment from the first commit.',
      viewFullPortfolio: 'View full portfolio on Behance',
      imagePlaceholder: '[ image ]',
    },
    designProjects: [
      { title: 'iClub — Interactive menu for restaurants', category: 'UI/UX · Tablet App', description: 'Menu app design for restaurants on Android. From initial mockup to final product: menu navigation, orders, and table-side payments.' },
      { title: 'Imaquinaria Estudio', category: 'Visual Identity', description: 'Brand identity and brand applications for Imaquinaria Estudio, a collaborative studio working with local illustrators, craftspeople, and producers.' },
      { title: 'Cuarto Mundo', category: 'Branding · Logo', description: 'Logo for Cuarto Mundo, a publication specializing in comics and pop culture with presence in print, web, and social media.' },
    ],
    footer: 'Temuco, Chile · Designed and built with Astro & Tailwind · Palette',
    footerLinks: { github: '[ GitHub ]', linkedin: '[ LinkedIn ]', behance: '[ Behance ]', mastodon: '[ Mastodon ]' },
  },
};
