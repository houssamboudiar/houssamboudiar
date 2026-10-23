import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    /** One sentence for cards and the meta description. */
    summary: z.string(),
    order: z.number(),
    kind: z.enum(['commercial', 'personal']),
    sector: z.string(),
    role: z.string(),
    /** Where the work happened, e.g. the employer or "Personal project". */
    context: z.string(),
    /** Omitted until confirmed; the row is hidden in production when missing. */
    status: z.string().optional(),
    stack: z.array(z.string()),
    /** Public repo URL. Leave unset until the repo is public. */
    repo: z.url().optional(),
    /** Demo video or GIF URL. */
    demo: z.string().optional(),
  }),
});

export const collections = { work };
