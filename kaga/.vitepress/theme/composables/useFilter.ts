import {ref,computed} from 'vue';

import type {Article} from '~/types/articles';
import {isArticleMatch} from '~/utils/filter]';

export function useFilter(articles:Article[]){
  const searchQuery=ref('');

  const filteredArticles=computed<Article[]>(()=>
    articles.filter(article=>
      isArticleMatch(
        article,
        searchQuery.value,
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
