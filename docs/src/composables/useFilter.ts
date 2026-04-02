import { ref, computed } from 'vue';

import type { ArticleDifficulty,ArticleSchema } from '@/types/article';
import { checkArticleMatch } from '@utils/filter';

export function useFilter(initialArticles:ArticleSchema[]){
  const searchQuery=ref('');
  const selectedDifficulties=ref<ArticleDifficulty[]>([]);
  const selectedCategories=ref<string[]>([]);

  const filteredArticles=computed(()=>
    initialArticles.filter(article=>{
      return checkArticleMatch(
        article,
        searchQuery.value,
        selectedDifficulties.value,
        selectedCategories.value,
      );
    })
  );

  return{
    searchQuery,
    selectedDifficulties,
    selectedCategories,
    filteredArticles,
  };
}
