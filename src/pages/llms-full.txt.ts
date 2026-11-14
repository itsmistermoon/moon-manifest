import type { APIRoute } from 'astro';
import { getDocs, site } from '../lib/markdown';

export const GET: APIRoute = async () => {
  const docs = await getDocs();
  const body = docs.map((doc) => `<!-- ${site}/${doc.mdPath}.md -->\n\n${doc.markdown}`).join('\n---\n\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
