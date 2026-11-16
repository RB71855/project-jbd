import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: z.object({
    code: z.string(),
    category: z.enum(['water', 'chemicals']),
    titleEn: z.string(),
    titleId: z.string(),
    descEn: z.string(),
    descId: z.string(),
    tagEn: z.string(),
    tagId: z.string(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    titleEn: z.string(),
    titleId: z.string(),
    sectorEn: z.string(),
    sectorId: z.string(),
    descEn: z.string(),
    descId: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

const settingsCollection = defineCollection({
  loader: glob({ pattern: 'company.json', base: './src/content/settings' }),
  schema: z.object({
    address: z.string(),
    phone: z.string(),
    whatsapp: z.string(),
  }),
});

export const collections = {
  'products': productsCollection,
  'projects': projectsCollection,
  'settings': settingsCollection,
};