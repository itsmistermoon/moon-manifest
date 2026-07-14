/** Datos invariantes al idioma — hrefs externos, viven una sola vez. */
export const socialLinks = {
  email: 'mailto:j.p.armstrong@me.com',
  github: 'https://github.com/itsmistermoon',
  linkedin: 'https://www.linkedin.com/in/jparmstrong-dev/',
  behance: 'https://www.behance.net/itsmistermoon',
  mastodon: 'https://lile.cl/@itsmistermoon',
  platform: 'https://df25g3qcnocfo.cloudfront.net/',
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
    title: 'Juan Pablo Armstrong · Analista Programador',
    tagline: 'Analista Programador · Cloud / AWS',
    bio: 'Graduate AWS Re/Start 2026. Proyecto serverless en producción. AWS Certified Cloud Practitioner.',
    sidebarNav: [
      { id: 'sobre-mi', label: 'Sobre mí' },
      { id: 'proyecto', label: 'Proyecto Destacado' },
      { id: 'experiencia', label: 'Experiencia' },
      { id: 'diseno', label: 'Diseño Gráfico' },
      { id: 'stack', label: 'Stack Tecnológico' },
    ],
    sections: [
      { id: 'sobre-mi', label: 'Sobre mí' },
      { id: 'proyecto', label: 'Proyecto' },
      { id: 'experiencia', label: 'Experiencia' },
      { id: 'diseno', label: 'Diseño Gráfico' },
      { id: 'stack', label: 'Stack' },
    ],
    viewCv: 'Ver CV online',
    downloadCv: 'Descargar CV (PDF)',
    navLinks: { home: 'Inicio', proyecto: 'Caso de estudio', cv: 'CV' },
    about: {
      label: 'Sobre mí',
      paragraphs: [
        'Analista Programador con experiencia en desarrollo web, administración de servidores y diseño de interfaces. Graduate de AWS Re/Start 2026, con proyecto serverless multi-tenant en producción. AWS Certified Cloud Practitioner. Autodidacta activo, inglés avanzado (TOEFL 101/120).',
        'Vengo del diseño gráfico — trabajé durante años en identidad visual, editorial y UI antes de hacer el cruce al desarrollo. Eso me da una perspectiva poco común: entiendo tanto la arquitectura del sistema como la experiencia del usuario final.',
        'Actualmente profundizando en el ecosistema AWS e integrando herramientas de IA en flujos de trabajo de desarrollo.',
      ],
    },
    projectSection: { label: 'Proyecto Destacado', viewCaseStudy: 'Ver caso de estudio', viewPlatform: 'Ver plataforma' },
    projects: [
      {
        title: 'Plataforma de Fidelización Serverless',
        subtitle: 'Proyecto final AWS Re/Start 2026 — Sistema en producción',
        description: 'Arquitectura multi-tenant diseñada y desplegada desde cero. Backend en FastAPI/Python sobre AWS Lambda, con frontend en React 19 + TypeScript. Implementación completa de CI/CD con GitHub Actions y gestión de identidad con Cognito.',
        status: 'En Producción',
        statusColor: 'yellow',
        tags: ['AWS Lambda', 'FastAPI / Python', 'React 19 + TS', 'GitHub Actions'],
      },
    ],
    experienceSection: { label: 'Experiencia' },
    experience: [
      { role: 'Cofundador · Desarrollo & Gestión', company: 'Imaquinaria Estudio / Tienda SPA', period: '2016 – ACTUALIDAD', description: 'Diseño y despliegue de plataforma serverless de fidelización gamificada. Gestión de identidad visual, producción de contenido y canales de venta.' },
      { role: 'Cofundador · Administrador Web y Editor', company: 'Cuarto Mundo', period: '2014 – ACTUALIDAD', description: 'Administración y personalización de plataforma WordPress para medio digital de cultura pop. Gestión editorial y producción de contenido desde la fundación.' },
      { role: 'Administrador de Servidores Web', company: 'Lazos S.A.', period: '2014 – 2015', description: 'Administración de servidores e implementación de funcionalidades para clientes. Replicación de navegación e intranet de CONAF para migración interna.' },
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
    stackSection: { label: 'Stack Tecnológico' },
    skills: [
      { title: 'Cloud & DevOps', description: 'AWS (Lambda, API Gateway, DynamoDB, Cognito, CloudFront, S3, SES, CloudWatch, SAM) · GitHub Actions · Docker' },
      { title: 'Desarrollo', description: 'Python · FastAPI · React 19 · TypeScript · HTML/CSS · MySQL · WordPress' },
      { title: 'IA & Agentes de Código', description: 'Claude Code · OpenAI Codex · Windsurf · Hermes Agent · Ollama · Perplexity' },
    ],
    footer: 'Temuco, Chile · Diseñado y construido con Astro & Tailwind · Paleta',
    footerLinks: { github: '[ GitHub ]', linkedin: '[ LinkedIn ]', behance: '[ Behance ]', mastodon: '[ Mastodon ]' },
  },
  en: {
    title: 'Juan Pablo Armstrong · Systems Analyst',
    tagline: 'Systems Analyst · Cloud / AWS',
    bio: 'AWS Re/Start 2026 Graduate. Serverless project in production. AWS Certified Cloud Practitioner.',
    sidebarNav: [
      { id: 'about', label: 'About' },
      { id: 'project', label: 'Featured Project' },
      { id: 'experience', label: 'Experience' },
      { id: 'design', label: 'Graphic Design' },
      { id: 'stack', label: 'Tech Stack' },
    ],
    sections: [
      { id: 'about', label: 'About' },
      { id: 'project', label: 'Project' },
      { id: 'experience', label: 'Experience' },
      { id: 'design', label: 'Design' },
      { id: 'stack', label: 'Stack' },
    ],
    viewCv: 'View CV online',
    downloadCv: 'Download CV (PDF)',
    navLinks: { home: 'Home', proyecto: 'Case study', cv: 'CV' },
    about: {
      label: 'About',
      paragraphs: [
        'Systems Analyst with experience in web development, server administration, and UI design. AWS Re/Start 2026 Graduate, with a multi-tenant serverless project in production. AWS Certified Cloud Practitioner. Active self-learner, advanced English (TOEFL 101/120).',
        'I come from graphic design — I spent years in visual identity, editorial, and UI before crossing into development. That gives me an uncommon perspective: I understand both system architecture and the end-user experience.',
        'Currently deepening expertise in the AWS ecosystem and integrating AI tools into development workflows.',
      ],
    },
    projectSection: { label: 'Featured Project', viewCaseStudy: 'View case study', viewPlatform: 'View platform' },
    projects: [
      {
        title: 'Serverless Loyalty Platform',
        subtitle: 'AWS Re/Start 2026 Final Project — Live system in production',
        description: 'Multi-tenant architecture designed and deployed from scratch. Backend in FastAPI/Python on AWS Lambda, frontend in React 19 + TypeScript. Full CI/CD with GitHub Actions and identity management with Cognito.',
        status: 'Live',
        statusColor: 'yellow',
        tags: ['AWS Lambda', 'FastAPI / Python', 'React 19 + TS', 'GitHub Actions'],
      },
    ],
    experienceSection: { label: 'Experience' },
    experience: [
      { role: 'Co-founder · Development & Operations', company: 'Imaquinaria Estudio / Tienda SPA', period: '2016 – PRESENT', description: 'Design and deployment of a gamified serverless loyalty platform. Brand identity management, content production, and sales channels.' },
      { role: 'Co-founder · Web Administrator & Editor', company: 'Cuarto Mundo', period: '2014 – PRESENT', description: 'Administration and customization of a WordPress platform for a pop culture digital publication. Editorial management and content production since founding.' },
      { role: 'Web Server Administrator', company: 'Lazos S.A.', period: '2014 – 2015', description: 'Server administration and feature implementation for clients. Replicated CONAF\'s navigation and intranet for an internal migration project.' },
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
    stackSection: { label: 'Tech Stack' },
    skills: [
      { title: 'Cloud & DevOps', description: 'AWS (Lambda, API Gateway, DynamoDB, Cognito, CloudFront, S3, SES, CloudWatch, SAM) · GitHub Actions · Docker' },
      { title: 'Development', description: 'Python · FastAPI · React 19 · TypeScript · HTML/CSS · MySQL · WordPress' },
      { title: 'AI & Code Agents', description: 'Claude Code · OpenAI Codex · Hermes Agent · Ollama' },
    ],
    footer: 'Temuco, Chile · Designed and built with Astro & Tailwind · Palette',
    footerLinks: { github: '[ GitHub ]', linkedin: '[ LinkedIn ]', behance: '[ Behance ]', mastodon: '[ Mastodon ]' },
  },
};
