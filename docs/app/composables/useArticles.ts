import type { ArticlesCollectionItem } from '@nuxt/content';

import { checkArticleMatch } from '~/utils/article';

export async function useArticles(){
  const searchQuery=ref('');

  const {locale}=useI18n();

  const {data:articles}=await useAsyncData(
    `articles-${locale.value}`,
    async()=>await queryCollection('articles')
      .all(),
    {watch:[locale]},
  );

  const filteredArticles=computed<ArticlesCollectionItem[]>(()=>
    articles.value?.filter(article=>{
      return checkArticleMatch(
        article,
        searchQuery.value,
        article.tags,
      );
    })
    ??[]
  );

  const matchesFound=computed<number>(()=>filteredArticles.value.length);

  return{
    searchQuery,
    filteredArticles,
    matchesFound,
  };
}
