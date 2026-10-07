/** Datos invariantes al idioma. */
export const platformUrl = 'https://df25g3qcnocfo.cloudfront.net/';
// TODO: Confirmar URL pública de VecinoClub antes de sustituir la URL actual.
// TODO: Confirmar comercios activos además de Imaquinaria, métricas recientes y si el nombre DŌJŌ sigue vigente.

export const levels = [
  { name: 'Rōnin', multiplier: '×1.0' },
  { name: 'Samurai', multiplier: '×1.3' },
  { name: 'Hatamoto', multiplier: '×1.7' },
  { name: 'Daimyō', multiplier: '×2.0' },
];

export const stack = [
  'FastAPI', 'Python 3.13', 'React 19', 'TypeScript', 'Mangum',
  'AWS Lambda', 'API Gateway', 'DynamoDB', 'Cognito',
  'CloudFront', 'S3', 'SES', 'CloudWatch', 'SSM',
  'AWS SAM', 'GitHub Actions',
];

/** Capturas completas de la aplicación móvil con datos ficticios. */
// TODO: el paso de wallet vuelve despues con capturas reales de un telefono real (issue aparte)
const allGalleryScreens = [
  { id: 'inicio-claro', width: 780, height: 1688, theme: 'light' },
  { id: 'inicio-oscuro', width: 780, height: 1688, theme: 'dark' },
  { id: 'misiones-claro', width: 780, height: 1688, theme: 'light' },
  { id: 'misiones-oscuro', width: 780, height: 1688, theme: 'dark' },
  { id: 'xp-nivel-claro', width: 780, height: 1688, theme: 'light' },
  { id: 'xp-nivel-oscuro', width: 780, height: 1688, theme: 'dark' },
  { id: 'recompensas-claro', width: 780, height: 1688, theme: 'light' },
  { id: 'recompensas-oscuro', width: 780, height: 1688, theme: 'dark' },
  { id: 'historial-claro', width: 780, height: 1688, theme: 'light' },
  { id: 'historial-oscuro', width: 780, height: 1688, theme: 'dark' },
] as const;

const fanScreenIds = new Set(['inicio-claro', 'misiones-claro', 'xp-nivel-claro']);
export const galleryScreens = {
  fan: allGalleryScreens.filter(screen => fanScreenIds.has(screen.id)),
  all: allGalleryScreens,
};

export const proyecto = {
  es: {
    title: 'VecinoClub · Caso de Estudio · Juan Pablo Armstrong',
    kicker: 'Caso de estudio · Plataforma SaaS de fidelización · En producción',
    heroTitle: 'VecinoClub',
    heroSubtitle: 'Plataforma serverless de fidelización para comercios locales de Chile',
    viewPlatform: 'Ver VecinoClub',
    badges: ['[ EN PRODUCCIÓN ]', 'Multi-tenant', '23 ADRs'],
    problem: {
      label: 'El problema',
      client: { label: 'El contexto', text: 'Los comercios locales necesitan construir una relación con quienes vuelven a comprar, más allá de cada venta.' },
      need: { label: 'La necesidad', text: 'Muchos no tienen cómo agradecer la preferencia de sus clientes ni saber quiénes son o con qué frecuencia regresan.' },
      purpose: { label: 'Primer comercio', text: 'Imaquinaria, tienda de manga y cultura japonesa en Temuco, es el primer comercio y banco de pruebas de VecinoClub.' },
    },
    solution: {
      label: 'La solución',
      customerPortal: { title: 'Experiencia del cliente', items: ['Escanea un código QR para entrar, sin instalar una app', 'Consulta sellos y puntos desde el celular', 'Revisa sus compras y beneficios disponibles', 'Canjea recompensas del comercio'] },
      adminPanel: { title: 'Panel del comercio', items: ['Define beneficios y condiciones del programa', 'Registra compras en caja', 'Gestiona recompensas y sellos', 'Consulta estadísticas de clientes y compras'] },
    },
    gallery: {
      title: 'La plataforma en uso',
      note: 'Interfaz real con datos de ejemplo. Camila Rojas es una persona ficticia; los saldos, compras y recompensas no corresponden a clientes reales.',
      heroTitle: 'Una experiencia que acompaña cada visita',
      heroLead: 'Del primer escaneo a la siguiente recompensa: así se ve VecinoClub en el celular de un cliente.',
      journey: {
        title: 'Recorrido del cliente',
        instruction: 'Explora cinco pasos para conocer las pantallas y decisiones de la experiencia.',
        stepLabel: 'Paso',
        stepCountConnector: 'de',
        steps: [
          { title: 'Registro y escaneo', summary: 'La entrada al club', bullets: ['El cliente escanea el QR del comercio para entrar desde el navegador.', 'Su club y sus beneficios quedan disponibles en el celular, sin instalar una app.'], screens: ['inicio-claro', 'inicio-oscuro'] },
          { title: 'Misiones y sellos', summary: 'Una razón para volver', bullets: ['Las misiones muestran cuántos sellos faltan y qué recompensa espera.', 'El comercio define las condiciones; cada compra registrada actualiza el avance.'], screens: ['misiones-claro', 'misiones-oscuro'] },
          { title: 'Nivel y XP', summary: 'Progreso visible', bullets: ['El perfil reúne nivel, experiencia acumulada y próximos hitos.', 'El Bushidō de Imaquinaria es una configuración del club, no un requisito de la plataforma.'], screens: ['xp-nivel-claro', 'xp-nivel-oscuro'] },
          { title: 'Recompensas', summary: 'Beneficios claros', bullets: ['El cliente consulta qué puede canjear y cuánto cuesta cada beneficio.', 'El comercio mantiene su catálogo y las reglas de canje.'], screens: ['recompensas-claro', 'recompensas-oscuro'] },
          { title: 'Historial', summary: 'Cada visita cuenta', bullets: ['Las compras registradas quedan visibles para el cliente.', 'El historial conecta el gasto con los puntos y la experiencia ganados.'], screens: ['historial-claro', 'historial-oscuro'] },
        ],
      },
      carousel: { title: 'Pantallas del celular', instruction: 'Desliza o usa las flechas para recorrer en ciclo continuo las vistas de cada pantalla en tema claro y oscuro.', previous: 'Captura anterior', next: 'Captura siguiente', slide: 'Captura' },
      groups: { screens: 'Vistas móviles', light: 'Móvil · tema claro', dark: 'Móvil · tema oscuro' },
      open: 'Abrir captura',
      images: {
        'inicio-claro': { caption: 'Inicio', alt: 'Inicio de VecinoClub en tema claro con una misión activa, saldo Mon y navegación inferior.' },
        'inicio-oscuro': { caption: 'Inicio', alt: 'Inicio de VecinoClub en tema oscuro con una misión activa, saldo Mon y navegación inferior.' },
        'misiones-claro': { caption: 'Misiones y sellos', alt: 'Misiones de VecinoClub en tema claro, con tarjetas de sellos parcialmente completadas y navegación inferior.' },
        'misiones-oscuro': { caption: 'Misiones y sellos', alt: 'Misiones de VecinoClub en tema oscuro, con tarjetas de sellos parcialmente completadas y navegación inferior.' },
        'xp-nivel-claro': { caption: 'Nivel y XP', alt: 'Perfil ficticio en tema claro con nivel Samurai, progreso de Bushidō XP y navegación inferior.' },
        'xp-nivel-oscuro': { caption: 'Nivel y XP', alt: 'Perfil ficticio en tema oscuro con nivel Samurai, progreso de Bushidō XP y navegación inferior.' },
        'recompensas-claro': { caption: 'Recompensas', alt: 'Catálogo ficticio de recompensas de VecinoClub en tema claro, con valores en Mon y navegación inferior.' },
        'recompensas-oscuro': { caption: 'Recompensas', alt: 'Catálogo ficticio de recompensas de VecinoClub en tema oscuro, con valores en Mon y navegación inferior.' },
        'historial-claro': { caption: 'Historial de compras', alt: 'Historial de compras ficticias en tema claro, con puntos ganados y navegación inferior.' },
        'historial-oscuro': { caption: 'Historial de compras', alt: 'Historial de compras ficticias en tema oscuro, con puntos ganados y navegación inferior.' },
      },
    },
    architecture: {
      label: 'Arquitectura',
      zone1: { label: 'Zona 1 — Borde / Público', items: ['CloudFront (CDN, SPA routing)', 'S3 Bucket (React static build)', 'HTTPS vía Route 53'] },
      zone2: { label: 'Zona 2 — Autenticación', items: ['API Gateway (HTTP API)', 'Cognito User Pool', 'Validación JWT en cada request'] },
      zone3: { label: 'Zona 3 — Cómputo / Privado', items: ['AWS Lambda (FastAPI + Mangum)', 'DynamoDB single-table (por tenant_id)', 'SSM · SES · CloudWatch'] },
      cicd: { label: 'CI/CD', text: 'GitHub Actions — despliegue de frontend (S3 / CloudFront) y backend (sam deploy). Gate manual requerido antes de producción.' },
    },
    decisionsLabel: 'Decisiones técnicas clave',
    decisions: [
      { number: '01', title: 'Multi-tenant desde el inicio', body: 'El sistema se diseñó desde el primer día para más de un comercio: cada consulta lleva el identificador del comercio, así que sumar uno nuevo es registrarlo, sin tocar la lógica de negocio. Imaquinaria sigue siendo el primer club y el programa Bushidō es una configuración de la plataforma, no su límite.', adr: null },
      { number: '02', title: 'DynamoDB single-table', body: 'Más de diez entidades comparten una tabla. Las claves PK/SK se modelan según los patrones de acceso y cada consulta incorpora el identificador del comercio.', adr: { label: 'ADR-0006', href: '/proyecto/adr/ADR-0006-arquitectura-aws-produccion' } },
      { number: '03', title: 'Pipeline con gate manual', body: 'GitHub Actions despliega a staging automáticamente. Producción requiere aprobación manual vía issue. Cinco bugs capturados en staging antes de llegar al sistema real.', adr: { label: 'ADR-0023', href: '/proyecto/adr/ADR-0023-roles-iam-en-iac' } },
      { number: '04', title: 'Migraciones de datos como código', body: 'Runner Python idempotente integrado en el pipeline CI/CD. Cada cambio de datos en DynamoDB pasa por PR, se versiona en git, y se aplica automáticamente en el deploy — cero pasos manuales post-deploy.', adr: { label: 'ADR-0019', href: '/proyecto/adr/ADR-0019-runner-migraciones-datos' } },
    ],
    metricsLabel: 'Producción — métricas reales',
    metrics: [
      { label: 'Requests en producción', value: '3.397', period: 'últimos 30 días' },
      { label: 'Error rate (5xx)', value: '0%', period: 'Lambda + API Gateway' },
      { label: 'Latencia p50 end-to-end', value: '151 ms', period: 'API Gateway + Cognito JWT' },
      { label: 'Latencia DynamoDB', value: '14–17 ms', period: 'promedio todas las operaciones' },
      { label: 'Cold start rate', value: '0,7%', period: '24 de 3.397 invocaciones' },
      { label: 'Throttles Lambda / DynamoDB', value: '0', period: 'últimos 30 días' },
    ],
    metricsFootnote: 'Datos de CloudWatch · Lambda + API Gateway + DynamoDB · últimos 30 días',
    adrsLabel: 'Architecture Decision Records',
    adrsIntro: 'Cada decisión técnica no obvia quedó registrada con contexto, alternativas consideradas y consecuencias. El proyecto acumula 23 ADRs. Los cuatro más representativos están disponibles como documentos públicos:',
    adrs: [
      { id: 'ADR-0003', title: 'HTTP API sobre REST API', href: '/proyecto/adr/ADR-0003-http-api-sobre-rest-api', summary: 'Por qué HTTP API a $1/M en vez de REST API a $3,5/M.' },
      { id: 'ADR-0006', title: 'Arquitectura AWS para producción', href: '/proyecto/adr/ADR-0006-arquitectura-aws-produccion', summary: 'Decisiones de dominio, Lambda, SSM y logs en el primer deploy.' },
      { id: 'ADR-0019', title: 'Runner de migraciones de datos', href: '/proyecto/adr/ADR-0019-runner-migraciones-datos', summary: 'Cómo un incidente de producción llevó a automatizar los cambios de datos en DynamoDB.' },
      { id: 'ADR-0023', title: 'Roles IAM como IaC', href: '/proyecto/adr/ADR-0023-roles-iam-en-iac', summary: 'Por qué un bug en producción es más barato que permisos gestionados a mano.' },
    ],
    loyalty: {
      label: 'Caso de uso: el Bushidō de Imaquinaria',
      title: 'El Bushidō de Imaquinaria',
      subtitle: 'Sistema de niveles con multiplicadores de puntos — los multiplicadores no son arbitrarios: están calibrados para que el canje de recompensas sea atractivo exactamente en el volumen de compra promedio del cliente de Imaquinaria.',
      tags: ['Tier premium Kamon', 'Stamp cards digitales', 'Sub-niveles con estados mentales Dōjō'],
    },
    stackLabel: 'Stack completo',
    crumb: 'Caso de estudio',
    footerCta: 'Ver VecinoClub',
  },
  en: {
    title: 'VecinoClub · Case Study · Juan Pablo Armstrong',
    kicker: 'Case study · Loyalty SaaS platform · In production',
    heroTitle: 'VecinoClub',
    heroSubtitle: 'Serverless loyalty platform for local businesses in Chile',
    viewPlatform: 'View VecinoClub',
    badges: ['[ LIVE ]', 'Multi-tenant', '23 ADRs'],
    problem: {
      label: 'The problem',
      client: { label: 'The context', text: 'Local businesses need to build relationships with returning customers beyond each individual sale.' },
      need: { label: 'The need', text: 'Many have no way to thank loyal customers or know who they are and how often they return.' },
      purpose: { label: 'First business', text: 'Imaquinaria, a manga and Japanese culture shop in Temuco, is VecinoClub’s first business and proving ground.' },
    },
    solution: {
      label: 'The solution',
      customerPortal: { title: 'Customer experience', items: ['Scan a QR code to get started, with no app to install', 'Check stamps and points on a phone', 'Review purchases and available benefits', 'Redeem rewards from the business'] },
      adminPanel: { title: 'Business dashboard', items: ['Define benefits and program rules', 'Register purchases at the counter', 'Manage rewards and stamps', 'View customer and purchase statistics'] },
    },
    gallery: {
      title: 'The platform in use',
      note: 'Real interface with sample data. Camila Rojas is a fictional person; balances, purchases, and rewards do not belong to real customers.',
      heroTitle: 'An experience that follows every visit',
      heroLead: 'From the first scan to the next reward: this is how VecinoClub appears on a customer’s phone.',
      journey: {
        title: 'Customer journey',
        instruction: 'Explore five steps to see the screens and decisions behind the experience.',
        stepLabel: 'Step',
        stepCountConnector: 'of',
        steps: [
          { title: 'Sign up and scan', summary: 'Joining the club', bullets: ['The customer scans the business’s QR code to enter in a browser.', 'The club and its benefits are available on their phone, with no app to install.'], screens: ['inicio-claro', 'inicio-oscuro'] },
          { title: 'Missions and stamps', summary: 'A reason to return', bullets: ['Missions show how many stamps remain and which reward comes next.', 'The business sets the conditions; each recorded purchase updates progress.'], screens: ['misiones-claro', 'misiones-oscuro'] },
          { title: 'Level and XP', summary: 'Visible progress', bullets: ['The profile brings together level, earned experience, and upcoming milestones.', 'Imaquinaria’s Bushidō is one club configuration, not a platform requirement.'], screens: ['xp-nivel-claro', 'xp-nivel-oscuro'] },
          { title: 'Rewards', summary: 'Clear benefits', bullets: ['Customers see what they can redeem and how much each benefit costs.', 'The business maintains its catalog and redemption rules.'], screens: ['recompensas-claro', 'recompensas-oscuro'] },
          { title: 'History', summary: 'Every visit counts', bullets: ['Recorded purchases remain visible to the customer.', 'The history connects spending to earned points and experience.'], screens: ['historial-claro', 'historial-oscuro'] },
        ],
      },
      carousel: { title: 'Phone screens', instruction: 'Swipe or use the arrows to cycle through each screen in light and dark themes.', previous: 'Previous screenshot', next: 'Next screenshot', slide: 'Screenshot' },
      groups: { screens: 'Mobile views', light: 'Mobile · light theme', dark: 'Mobile · dark theme' },
      open: 'Open screenshot',
      images: {
        'inicio-claro': { caption: 'Home', alt: 'VecinoClub light theme home with an active mission, Mon balance, and bottom navigation.' },
        'inicio-oscuro': { caption: 'Home', alt: 'VecinoClub dark theme home with an active mission, Mon balance, and bottom navigation.' },
        'misiones-claro': { caption: 'Missions and stamps', alt: 'Light theme VecinoClub missions with partially completed stamp cards and bottom navigation.' },
        'misiones-oscuro': { caption: 'Missions and stamps', alt: 'Dark theme VecinoClub missions with partially completed stamp cards and bottom navigation.' },
        'xp-nivel-claro': { caption: 'Level and XP', alt: 'Fictional light theme profile with Samurai level, Bushidō XP progress, and bottom navigation.' },
        'xp-nivel-oscuro': { caption: 'Level and XP', alt: 'Fictional dark theme profile with Samurai level, Bushidō XP progress, and bottom navigation.' },
        'recompensas-claro': { caption: 'Rewards', alt: 'Fictional VecinoClub light theme rewards catalog with Mon values and bottom navigation.' },
        'recompensas-oscuro': { caption: 'Rewards', alt: 'Fictional VecinoClub dark theme rewards catalog with Mon values and bottom navigation.' },
        'historial-claro': { caption: 'Purchase history', alt: 'Fictional light theme purchase history with earned points and bottom navigation.' },
        'historial-oscuro': { caption: 'Purchase history', alt: 'Fictional dark theme purchase history with earned points and bottom navigation.' },
      },
    },
    architecture: {
      label: 'Architecture',
      zone1: { label: 'Zone 1 — Edge / Public', items: ['CloudFront (CDN, SPA routing)', 'S3 Bucket (React static build)', 'HTTPS via Route 53'] },
      zone2: { label: 'Zone 2 — Authentication', items: ['API Gateway (HTTP API)', 'Cognito User Pool', 'JWT validation on every request'] },
      zone3: { label: 'Zone 3 — Compute / Private', items: ['AWS Lambda (FastAPI + Mangum)', 'DynamoDB single-table (by tenant_id)', 'SSM · SES · CloudWatch'] },
      cicd: { label: 'CI/CD', text: 'GitHub Actions — deploys frontend (S3 / CloudFront) and backend (sam deploy). Manual gate required before production.' },
    },
    decisionsLabel: 'Key technical decisions',
    decisions: [
      { number: '01', title: 'Multi-tenant from day one', body: 'The system was designed for more than one business from day one: every query carries a business identifier, so adding another business means registering it, without changing the business logic. Imaquinaria remains the first club, and the Bushidō program is one configuration of the platform, not its limit.', adr: null },
      { number: '02', title: 'DynamoDB single-table', body: 'More than ten entities share one table. PK/SK keys follow access patterns, and every query includes the business identifier.', adr: { label: 'ADR-0006', href: '/en/project/adr/ADR-0006-aws-production-architecture' } },
      { number: '03', title: 'Pipeline with manual gate', body: 'GitHub Actions deploys to staging automatically. Production requires manual approval via issue. Five bugs caught in staging before reaching the live system.', adr: { label: 'ADR-0023', href: '/en/project/adr/ADR-0023-iam-roles-as-iac' } },
      { number: '04', title: 'Data migrations as code', body: 'Idempotent Python runner integrated in the CI/CD pipeline. Every DynamoDB data change goes through a PR, is versioned in git, and is applied automatically on deploy — zero manual post-deploy steps.', adr: { label: 'ADR-0019', href: '/en/project/adr/ADR-0019-data-migration-runner' } },
    ],
    metricsLabel: 'Production — real metrics',
    metrics: [
      { label: 'Requests in production', value: '3.397', period: 'last 30 days' },
      { label: 'Error rate (5xx)', value: '0%', period: 'Lambda + API Gateway' },
      { label: 'p50 end-to-end latency', value: '151 ms', period: 'API Gateway + Cognito JWT' },
      { label: 'DynamoDB latency', value: '14–17 ms', period: 'average across all operations' },
      { label: 'Cold start rate', value: '0.7%', period: '24 of 3,397 invocations' },
      { label: 'Lambda / DynamoDB throttles', value: '0', period: 'last 30 days' },
    ],
    metricsFootnote: 'CloudWatch data · Lambda + API Gateway + DynamoDB · last 30 days',
    adrsLabel: 'Architecture Decision Records',
    adrsIntro: 'Every non-obvious technical decision was recorded with context, alternatives considered, and consequences. The project has accumulated 23 ADRs. The four most representative ones are available as public documents:',
    adrs: [
      { id: 'ADR-0003', title: 'HTTP API over REST API', href: '/en/project/adr/ADR-0003-http-api-over-rest-api', summary: 'Why HTTP API at $1/M instead of REST API at $3.5/M.' },
      { id: 'ADR-0006', title: 'AWS architecture for production', href: '/en/project/adr/ADR-0006-aws-production-architecture', summary: 'Domain, Lambda, SSM, and logging decisions on the first deploy.' },
      { id: 'ADR-0019', title: 'Data migration runner', href: '/en/project/adr/ADR-0019-data-migration-runner', summary: 'How a production incident led to automating DynamoDB data changes.' },
      { id: 'ADR-0023', title: 'IAM roles as IaC', href: '/en/project/adr/ADR-0023-iam-roles-as-iac', summary: 'Why a production bug is cheaper than manually managed permissions.' },
    ],
    loyalty: {
      label: 'Use case: Imaquinaria’s Bushidō',
      title: 'The Imaquinaria Bushidō',
      subtitle: 'Level system with points multipliers — the multipliers are not arbitrary: they are calibrated so that reward redemption is attractive at exactly the average purchase volume of an Imaquinaria customer.',
      tags: ['Premium Kamon tier', 'Digital stamp cards', 'Dōjō mental state sub-levels'],
    },
    stackLabel: 'Full stack',
    crumb: 'Case study',
    footerCta: 'View VecinoClub',
  },
};
