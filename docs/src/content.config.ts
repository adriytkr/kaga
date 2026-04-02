import {defineCollection} from 'astro:content';
import {z} from 'astro/zod';
import {glob} from 'astro/loaders';

import { ARTICLE_DIFFICULTIES } from '@utils/article';

const articleSchema=z.object({
  to:z.string().optional(),
  title:z.string(),
  description:z.string(),
  thumbnail:z.string(),
  difficulty:z.enum(ARTICLE_DIFFICULTIES),
  categories:z.array(z.string()).default([]),
});

const articlesCollection=defineCollection({
  loader:glob({
    base:'./src/content/articles',
    pattern:'**/*.{md,mdx}',
  }),
  schema:articleSchema,
});

export const collections={
  articles:articlesCollection,
};
