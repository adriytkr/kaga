<script setup lang="ts">
import { ref, computed, provide } from 'vue';

import type { ArticleDifficulty,ArticleSchema,FilterLabel } from '@types/article';
import { checkArticleMatch } from '@utils/filter';

import SidebarFilter from './SidebarFilter.vue';
import Card from './Card.vue';

const props=defineProps<{
  articles:ArticleSchema[];
  categories:string[];
  difficulties:ArticleDifficulty[];
  t:FilterLabel;
}>();

provide<FilterLabel>('t',props.t);

const searchQuery=ref('');
const selectedDifficulties=ref<ArticleDifficulty[]>([]);
const selectedCategories=ref<string[]>([]);

const filteredArticles=computed(()=>
  props.articles.filter(article=>{
    return checkArticleMatch(
      article,
      searchQuery.value,
      selectedDifficulties.value,
      selectedCategories.value,
    );
  })
);
</script>

<template>
  <div class="flex h-full">
    <aside class="flex-1 my-4 mx-12">
      <SidebarFilter
        v-model:query="searchQuery"
        :difficulties-list="difficulties"
        v-model:difficulties="selectedDifficulties"
        :categories-list="categories"
        v-model:categories="selectedCategories"
      />
    </aside>
    <div
      v-if="filteredArticles.length===0"
      class="w-full h-full flex justify-center items-center"
    >
      <p>{{ t['empty'] }}</p>
    </div>
    <div v-else class="w-full max-w-4xl grid grid-cols-3 gap-4 p-4">
      <Card
        v-for="article in filteredArticles"
        :key="article.id"
        :title="article.data.title"
        :description="article.data.description"
        :difficulty="article.data.difficulty"
      />
    </div>
    <div class="flex-1"></div>
  </div>
</template>
