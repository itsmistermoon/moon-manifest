/** Datos invariantes al idioma — hrefs externos, viven una sola vez. */
export const socialLinks = {
  email: 'mailto:j.p.armstrong@me.com',
  github: 'https://github.com/itsmistermoon',
  linkedin: 'https://www.linkedin.com/in/jparmstrong-dev/',
  behance: 'https://www.behance.net/itsmistermoon',
  mastodon: 'https://lile.cl/@itsmistermoon',
  platform: 'https://df25g3qcnocfo.cloudfront.net/',
};

export const designProjectsMeta = [
  { image: 'https://mir-s3-cdn-cf.behance.net/projects/404/8d1ae943812871.Y3JvcCw2OTksNTQ3LDMwMiw0OA.jpeg', link: 'https://www.behance.net/gallery/43812871/iClub-Interactive-menu-for-restaurants-on-tablets' },
  { image: 'https://mir-s3-cdn-cf.behance.net/projects/404/6f6c3c91696533.Y3JvcCw4MTEsNjM0LDI5NSw4Mg.jpg', link: 'https://www.behance.net/gallery/91696533/Imaquinaria-Estudio' },
  { image: 'https://mir-s3-cdn-cf.behance.net/projects/404/24f1ea91699409.Y3JvcCw2MjIsNDg2LDY5MCw1NzE.jpg', link: 'https://www.behance.net/gallery/91699409/Cuarto-Mundo' },
];

export const home = {
  es: {
    title: 'Juan Pablo Armstrong · Analista Programador',
    landing: {
      homeLabel: 'Juan Pablo Armstrong, inicio',
      navLabel: 'Navegación principal',
      nav: { work: 'Trabajo', experience: 'Experiencia', design: 'Diseño', cv: 'CV' },
      eyebrow: 'Juan Pablo Armstrong, Analista Programador',
      heroTitle: ['De la interfaz', 'a producción'],
      heroLede: 'Combino diseño visual, desarrollo web y arquitectura AWS. Mi proyecto más completo ya funciona en un comercio real de Temuco.',
      heroCta: 'Leer el caso VecinoClub',
      heroContact: 'Escribirme',
      heroFootnote: 'AWS Certified Cloud Practitioner. Vivo en Temuco, Chile.',
      proof: {
        label: 'Ver el caso de estudio VecinoClub',
        top: 'Un producto en producción',
        text: 'Una plataforma de fidelización para comercios locales, con Imaquinaria, tienda de manga y cultura japonesa en Temuco, como primer comercio.',
        stack: ['React 19', 'FastAPI', 'AWS'],
        bottom: 'Ver cómo se construyó',
      },
      capabilitiesLabel: 'Áreas de trabajo',
      capabilities: [
        { title: 'Diseño la experiencia', text: 'Interfaces e identidad visual' },
        { title: 'Desarrollo el producto', text: 'React, TypeScript, Python y FastAPI' },
        { title: 'Lo llevo a producción', text: 'AWS, despliegue y operación' },
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
          { label: 'Operación', text: 'CI/CD con GitHub Actions y despliegue en AWS' },
        ],
      },
      experience: {
        title: 'Una trayectoria entre diseño y tecnología',
        intro: 'Mi trabajo empezó en identidad visual y medios digitales. Esa experiencia ahora informa cómo diseño interfaces, construyo sistemas y los mantengo funcionando.',
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
    experience: [
      { role: 'Cofundador · Desarrollo & Gestión', company: 'Imaquinaria Estudio / Tienda SPA', period: '2016 – ACTUALIDAD', description: 'Imaquinaria es el primer comercio y banco de pruebas de VecinoClub. Diseño y desarrollo del programa Bushidō, además de identidad visual, contenido y canales de venta de la tienda.' },
      { role: 'Cofundador · Administrador Web y Editor', company: 'Cuarto Mundo', period: '2014 – ACTUALIDAD', description: 'Administración y personalización de plataforma WordPress para medio digital de cultura pop. Gestión editorial y producción de contenido desde la fundación.' },
      { role: 'Administrador de Servidores Web', company: 'Lazos S.A.', period: '2014 – 2015', description: 'Administración de servidores e implementación de funcionalidades para clientes. Replicación de navegación e intranet de CONAF para migración interna.' },
    ],
    designSection: {
      viewFullPortfolio: 'Ver portfolio completo en Behance',
    },
    designProjects: [
      { title: 'iClub — Menú interactivo para restaurantes', category: 'UI/UX · App Tablet', description: 'Diseño de aplicación de menú para restaurantes en Android. Del mockup inicial al producto final: navegación de carta, pedidos y pagos desde la mesa.' },
      { title: 'Imaquinaria Estudio', category: 'Identidad Visual', description: 'Creación de identidad gráfica y aplicaciones de marca para Imaquinaria Estudio, estudio colaborativo con ilustradores locales, artesanos y productores.' },
      { title: 'Cuarto Mundo', category: 'Branding · Logo', description: 'Logotipo para Cuarto Mundo, medio especializado en cómics y cultura pop con presencia en prensa, web y redes sociales.' },
    ],
  },
  en: {
    title: 'Juan Pablo Armstrong · Systems Analyst',
    landing: {
      homeLabel: 'Juan Pablo Armstrong, home',
      navLabel: 'Main navigation',
      nav: { work: 'Work', experience: 'Experience', design: 'Design', cv: 'CV' },
      eyebrow: 'Juan Pablo Armstrong, Systems Analyst',
      heroTitle: ['From interface', 'to production'],
      heroLede: 'I combine visual design, web development, and AWS architecture. My most complete project already runs in a real shop in Temuco.',
      heroCta: 'Read the VecinoClub case',
      heroContact: 'Write to me',
      heroFootnote: 'AWS Certified Cloud Practitioner. Based in Temuco, Chile.',
      proof: {
        label: 'View the VecinoClub case study',
        top: 'A product in production',
        text: 'A loyalty platform for local businesses, with Imaquinaria, a manga and Japanese culture shop in Temuco, as its first business.',
        stack: ['React 19', 'FastAPI', 'AWS'],
        bottom: 'See how it was built',
      },
      capabilitiesLabel: 'Areas of work',
      capabilities: [
        { title: 'I design the experience', text: 'Interfaces and visual identity' },
        { title: 'I build the product', text: 'React, TypeScript, Python, and FastAPI' },
        { title: 'I take it to production', text: 'AWS, deployment, and operations' },
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
          { label: 'Operations', text: 'CI/CD with GitHub Actions and AWS deployment' },
        ],
      },
      experience: {
        title: 'A career between design and technology',
        intro: 'My work started in visual identity and digital media. That experience now informs how I design interfaces, build systems, and keep them running.',
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
    experience: [
      { role: 'Co-founder · Development & Operations', company: 'Imaquinaria Estudio / Tienda SPA', period: '2016 – PRESENT', description: 'Imaquinaria is VecinoClub’s first business and proving ground. I design and develop its Bushidō program alongside the shop’s brand identity, content, and sales channels.' },
      { role: 'Co-founder · Web Administrator & Editor', company: 'Cuarto Mundo', period: '2014 – PRESENT', description: 'Administration and customization of a WordPress platform for a pop culture digital publication. Editorial management and content production since founding.' },
      { role: 'Web Server Administrator', company: 'Lazos S.A.', period: '2014 – 2015', description: 'Server administration and feature implementation for clients. Replicated CONAF\'s navigation and intranet for an internal migration project.' },
    ],
    designSection: {
      viewFullPortfolio: 'View full portfolio on Behance',
    },
    designProjects: [
      { title: 'iClub — Interactive menu for restaurants', category: 'UI/UX · Tablet App', description: 'Menu app design for restaurants on Android. From initial mockup to final product: menu navigation, orders, and table-side payments.' },
      { title: 'Imaquinaria Estudio', category: 'Visual Identity', description: 'Brand identity and brand applications for Imaquinaria Estudio, a collaborative studio working with local illustrators, craftspeople, and producers.' },
      { title: 'Cuarto Mundo', category: 'Branding · Logo', description: 'Logo for Cuarto Mundo, a publication specializing in comics and pop culture with presence in print, web, and social media.' },
    ],
  },
};
