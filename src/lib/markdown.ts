/** Versiones Markdown de cada página, generadas desde el mismo contenido que el HTML.
 *  Alimentan las rutas *.md, llms.txt y llms-full.txt. */
import type { CollectionEntry } from 'astro:content';
import { cv, contact } from '../content/cv';
import { home, designProjectsMeta, socialLinks } from '../content/home';
import { proyecto, platformUrl, stack, levels } from '../content/proyecto';
import { routes, type Locale } from './routes';
import { adrHref, getAdrs } from './adr';

export const site = 'https://jparmstrong.vercel.app';

export interface Doc {
  locale: Locale;
  /** Ruta de la página HTML. */
  href: string;
  /** Ruta del Markdown, sin la extensión `.md`. */
  mdPath: string;
  title: string;
  description: string;
  markdown: string;
}

/** URL absoluta del Markdown de una página HTML. `/` → `/index.md`, `/en` → `/en/index.md`. */
export const mdPathFor = (href: string) => (href === '/' ? 'index' : href === '/en' ? 'en/index' : href.slice(1));
export const mdUrl = (href: string) => `${site}/${mdPathFor(href)}.md`;

const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join('\n');
const blocks = (...parts: (string | false | null | undefined)[]) => parts.filter(Boolean).join('\n\n') + '\n';

function homeDoc(locale: Locale): Doc {
  const t = home[locale];
  const l = t.landing;
  const c = cv[locale];
  const en = locale === 'en';
  const project = t.projects[0];
  return {
    locale,
    href: routes.home[locale],
    mdPath: mdPathFor(routes.home[locale]),
    title: en ? 'Home' : 'Inicio',
    description: en
      ? 'Overview of his cloud work on VecinoClub, his experience and his design background.'
      : 'Resumen de su trabajo cloud en VecinoClub, su experiencia y su base en diseño.',
    markdown: blocks(
      `# ${c.name}`,
      `> ${c.tagline}`,
      l.heroLede,
      `[${l.heroFootnote.cert}](${socialLinks.credly})${l.heroFootnote.rest}`,
      `## ${l.capabilitiesLabel}`,
      list(l.capabilities.map((cap) => `**${cap.title}:** ${cap.text}`)),
      `## ${l.work.title}`,
      `${project.description} [${t.projectSection.viewCaseStudy}](${mdUrl(routes.proyecto[locale])})`,
      list(l.work.evidence.map((e) => `**${e.label}:** ${e.text}`)),
      `## ${l.experience.title}`,
      l.experience.intro,
      list(c.experience.map((x) => `**${x.role}**, ${x.company} (${x.period}): ${x.bullets[0]}`)),
      `[${t.viewCv}](${mdUrl(routes.cv[locale])})`,
      `## ${l.design.title}`,
      l.design.intro,
      list(t.designProjects.map((p, i) => `[${p.title}](${designProjectsMeta[i].link ?? mdUrl(routes.proyecto[locale])}) (${p.category}): ${p.description}`)),
      `## ${l.contact.title}`,
      `${l.contact.text} ${contact.email}`,
      list([`GitHub: ${socialLinks.github}`, `LinkedIn: ${socialLinks.linkedin}`, `Behance: ${socialLinks.behance}`, `X: ${socialLinks.x}`]),
    ),
  };
}

function cvDoc(locale: Locale): Doc {
  const t = cv[locale];
  const p = t.project;
  const en = locale === 'en';
  return {
    locale,
    href: routes.cv[locale],
    mdPath: mdPathFor(routes.cv[locale]),
    title: 'CV',
    description: en
      ? 'Experience at VecinoClub, Imaquinaria, Cuarto Mundo, Lazos S.A. and iClub, education, skills and languages.'
      : 'Experiencia en VecinoClub, Imaquinaria, Cuarto Mundo, Lazos S.A. e iClub, formación, habilidades e idiomas.',
    markdown: blocks(
      `# ${t.name}`,
      `> ${t.tagline}`,
      `${contact.location} · ${contact.email} · ${contact.phone} · PDF: ${site}${routes.cv[locale]}.pdf`,
      `## ${t.sections.profile}`,
      t.profile,
      `## ${t.sections.project}: ${p.title}`,
      `${p.subtitle}. [${p.viewCaseStudy}](${mdUrl(routes.proyecto[locale])})`,
      list((['backend', 'frontend', 'awsServices', 'devops', 'landing', 'architecture'] as const).map((k) => `**${p.labels[k]}:** ${p[k]}`)),
      `## ${t.sections.experience}`,
      ...t.experience.map((x) => blocks(`### ${x.role} · ${x.company}`, `${x.period} · ${x.location}`, list(x.bullets)).trimEnd()),
      `## ${t.sections.education}`,
      ...t.education.map((e) =>
        blocks(`### ${e.title} · ${e.institution}`, [e.period, e.location].filter(Boolean).join(' · '), e.description, 'link' in e && `[${t.verifyBadge}](${e.link})`).trimEnd(),
      ),
      `## ${t.sections.skills}`,
      list(t.skills.map((s) => `**${s.category}:** ${s.items.join(', ')}`)),
      `## ${t.sections.language}`,
      `${t.language.title}: ${t.language.level}`,
    ),
  };
}

function proyectoDoc(locale: Locale): Doc {
  const t = proyecto[locale];
  const en = locale === 'en';
  const a = t.architecture;
  return {
    locale,
    href: routes.proyecto[locale],
    mdPath: mdPathFor(routes.proyecto[locale]),
    title: en ? 'VecinoClub case study' : 'Caso de estudio VecinoClub',
    description: en
      ? 'The problem, the customer portal and merchant dashboard, the AWS architecture, key decisions and production metrics.'
      : 'El problema, el portal de clientes y el panel del comercio, la arquitectura AWS, las decisiones clave y las métricas de producción.',
    markdown: blocks(
      `# ${t.heroTitle}`,
      `> ${t.heroSubtitle}. ${t.kicker}.`,
      `${t.viewPlatform}: ${platformUrl}`,
      `## ${t.problem.label}`,
      list([t.problem.client, t.problem.need, t.problem.purpose].map((x) => `**${x.label}:** ${x.text}`)),
      `## ${t.solution.label}`,
      `### ${t.solution.customerPortal.title}`,
      list(t.solution.customerPortal.items),
      `### ${t.solution.adminPanel.title}`,
      list(t.solution.adminPanel.items),
      `## ${a.label}`,
      ...[a.zone1, a.zone2, a.zone3].map((z) => blocks(`### ${z.label}`, list(z.items)).trimEnd()),
      `### ${a.cicd.label}`,
      a.cicd.text,
      `## ${t.decisionsLabel}`,
      ...t.decisions.map((d) =>
        blocks(`### ${d.number}. ${d.title}`, d.body, d.adr && `[${d.adr.label}](${mdUrl(d.adr.href)})`).trimEnd(),
      ),
      `## ${t.metricsLabel}`,
      list(t.metrics.map((m) => `**${m.label}:** ${m.value} (${m.period})`)),
      t.metricsFootnote,
      `## ${t.adrsLabel}`,
      t.adrsIntro,
      list(t.adrs.map((x) => `[${x.id}: ${x.title}](${mdUrl(x.href)}): ${x.summary}`)),
      `## ${t.loyalty.title}`,
      t.loyalty.subtitle,
      list(levels.map((lv) => `${lv.name}: ${lv.multiplier}`)),
      list(t.loyalty.tags),
      `## ${t.stackLabel}`,
      stack.join(', '),
    ),
  };
}

function adrDoc(entry: CollectionEntry<'adr'>): Doc {
  const { locale, id, shortTitle, title, date, status } = entry.data;
  const href = adrHref(locale, entry.id);
  const summary = proyecto[locale].adrs.find((x) => x.id === id)?.summary;
  if (!summary) throw new Error(`Falta el resumen de ${id} en proyecto.ts`);
  return {
    locale,
    href,
    mdPath: mdPathFor(href),
    title: `${id}: ${shortTitle}`,
    description: summary,
    markdown: blocks(`# ${id}: ${title}`, `${date.toISOString().slice(0, 10)} · ${status}`, entry.body?.trim()),
  };
}

/** Todas las páginas del sitio en Markdown, inglés primero. */
export async function getDocs(): Promise<Doc[]> {
  const docs: Doc[] = [];
  for (const locale of ['en', 'es'] as const) {
    docs.push(cvDoc(locale), homeDoc(locale), proyectoDoc(locale));
    const adrs = (await getAdrs(locale)).sort((x, y) => x.data.id.localeCompare(y.data.id));
    docs.push(...adrs.map(adrDoc));
  }
  return docs;
}
