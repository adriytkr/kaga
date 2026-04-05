<script setup lang="ts">
import { nextTick, ref } from 'vue';

import type { SearchFilter } from '~/types/article';

import { useArticles } from '~/composables/useArticles';

const searchRef=ref<SearchFilter>();

const {
  searchQuery,
  filteredArticles,
  matchesFound,
}=await useArticles();

async function clearSearch(){
  searchQuery.value='';
  await nextTick();
  searchRef.value?.focusInput();
}

const {t}=useI18n();

const getSearchMessage=(count:number):string=>
  t(
    'articlesPage.filter.matches',
    {
      count:count,
      query:searchQuery.value,
    },
    matchesFound.value,
  )
</script>

<template>
  <div class="min-h-full flex flex-col">
    <div class="mb-8">
      <ArticleSearch
        ref="searchRef"
        v-model="searchQuery"
      />
    </div>
    <div v-if="matchesFound>0">
      <p class="mb-4" v-if="searchQuery.trim().length>0">
        {{getSearchMessage(matchesFound)}}
      </p>
      <ArticleList :articles="filteredArticles"/>
    </div>
    <div
      v-else
      class="flex-1 flex flex-col items-center justify-center"
    >
      <p class="mb-2">
        {{getSearchMessage(0)}}
      </p>
      <button
        class="text-primary hover:underline"
        @click="clearSearch"
      >
        {{ $t('articlesPage.filter.clear') }}
      </button>
    </div>
  </div>
</template>