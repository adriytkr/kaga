<script setup lang="ts">
import { provide } from 'vue';

import type { ArticleDifficulty,ArticleSchema } from '@/types/article';
import type { FilterLabel } from '@/types/t';
import type { Locale } from '@/types/i18n';

import { useFilter } from '@/composables/useFilter';

import SidebarFilter from './filter/SidebarFilter.vue';
import ArticleList from './ArticleList.vue';

const props=defineProps<{
  articles:ArticleSchema[];
  categories:string[];
  difficulties:ArticleDifficulty[];
  t:FilterLabel;
  locale:Locale;
}>();

provide<FilterLabel>('t',props.t);
provide<Locale>('locale',props.locale);

provide<string[]>('categories',props.categories);
provide<ArticleDifficulty[]>('difficulties',props.difficulties);

const {
  searchQuery,
  selectedDifficulties,
  selectedCategories,
  filteredArticles,
}=useFilter(props.articles);
</script>

<template>
  <div class="flex h-full">
    <aside class="flex-1 my-4 mx-12">
      <SidebarFilter
        v-model:query="searchQuery"
        v-model:difficulties="selectedDifficulties"
        v-model:categories="selectedCategories"
      />
    </aside>
    <div
      v-if="filteredArticles.length===0"
      class="w-full h-full flex justify-center items-center"
    >
      <p>{{ t['empty'] }}</p>
    </div>
    <ArticleList
      v-else
      :articles="filteredArticles"
    />
    <div class="flex-1"></div>
  </div>
</template>
