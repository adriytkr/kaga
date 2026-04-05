import {ref,computed} from 'vue';

import type {Article} from '~/types/article';
import {checkShowArticle} from '~/utils/article';

export function useFilter(articles:Article[]){
  const searchQuery=ref('');

  const filteredArticles=computed<Article[]>(()=>
    articles.filter(article=>
      checkShowArticle(
        article,
        searchQuery.value,
        [],
      )
    )
  );

  const matchesFound=computed<number>(()=>
    filteredArticles.value.length
  );

  return{
    searchQuery,
    filteredArticles,
    matchesFound,
  };
}
