import type { APIRoute, GetStaticPaths } from 'astro';
import { getDocs, type Doc } from '../lib/markdown';

export const getStaticPaths = (async () =>
  (await getDocs()).map((doc) => ({ params: { path: doc.mdPath }, props: { doc } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) =>
  new Response((props as { doc: Doc }).doc.markdown, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
