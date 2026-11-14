import type { APIRoute } from 'astro';
import { cv, contact } from '../content/cv';
import { socialLinks } from '../content/home';
import { getDocs, site, type Doc } from '../lib/markdown';
import { routes } from '../lib/routes';

const link = (doc: Doc) => `- [${doc.title}${doc.locale === 'es' ? ' (español)' : ''}](${site}/${doc.mdPath}.md): ${doc.description}`;

export const GET: APIRoute = async () => {
  const docs = await getDocs();
  const en = docs.filter((d) => d.locale === 'en');
  const es = docs.filter((d) => d.locale === 'es');
  const profile = en.filter((d) => d.href === routes.cv.en || d.href === routes.home.en);
  const project = en.filter((d) => !profile.includes(d));
  const t = cv.en;

  const body = [
    `# ${t.name}`,
    `> ${t.tagline}`,
    t.profile,
    `Based in ${contact.location}; open to remote roles and to on-site or hybrid roles in Temuco. English: ${t.language.level}. Contact: ${contact.email}. Every page below is Markdown, and llms-full.txt has them all in one file. Spanish versions are under Optional.`,
    '## Profile',
    [...profile.map(link), `- [CV PDF](${site}${routes.cv.en}.pdf): The same CV as a one-page PDF.`].join('\n'),
    '## VecinoClub',
    project.map(link).join('\n'),
    '## Optional',
    [
      ...es.map(link),
      `- [CV PDF (español)](${site}${routes.cv.es}.pdf): CV en español, una página.`,
      `- [GitHub](${socialLinks.github}): Repositories and code.`,
      `- [LinkedIn](${socialLinks.linkedin}): Professional profile.`,
    ].join('\n'),
  ].join('\n\n');

  return new Response(body + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
