import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const adr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/adr' }),
  schema: z.object({
    locale: z.enum(['es', 'en']),
    id: z.string(),
    shortTitle: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    status: z.string(),
    translation: z.string(),
  }),
});

export const collections = { adr };
