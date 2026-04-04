import { getCollection } from 'astro:content';

import type { Locale } from '@/types/i18n';
import type { ArticleSchema } from '@/types/article';

export class ArticleService{
  public static async getAllArticlesByLocale(locale:Locale,featured:boolean=false):Promise<ArticleSchema[]>{
    if(featured)
      return await getCollection(
        'articles',
        article=>
          article.data.featured===true&&
          article.id.startsWith(`${locale}/`)
      ) as ArticleSchema[];

    return await getCollection(
      'articles',
      article=>
        article.id.startsWith(`${locale}/`)
    ) as ArticleSchema[];
  }
}
