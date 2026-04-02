import type { Locale } from '@/types/i18n';
import { getCollection, type CollectionEntry } from 'astro:content';

export async function getArticlesByLocale(locale:Locale):Promise<CollectionEntry<'articles'>[]>{
  const allArticles=await getCollection(
    'articles',
    ({id})=>id.startsWith(`${locale}/`),
  );

  allArticles.sort();

  return allArticles;
}
