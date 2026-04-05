---
layout: normal
---

<script setup lang="ts">
import { nextTick, ref } from 'vue';

import type { SearchFilter } from '~/types/article';
import {useFilter} from '~/composables/useFilter';

import {enFilterT} from '~/i18n/locales/en/filter';

import ArticleSearch from '~/components/article/Search.vue';
import ArticleList from '~/components/article/List.vue';

import { data as articles } from '~/content/en-articles.data.ts';

const {
  searchQuery,
  filteredArticles,
  matchesFound,
}=useFilter(articles);

const searchRef=ref<SearchFilter>();

async function clearSearch(){
  searchQuery.value='';
  await nextTick();
  searchRef.value?.focusInput();
}
</script>

<div class="min-h-full flex flex-col">
  <div class="mb-8">
    <ArticleSearch
      ref="searchRef"
      v-model="searchQuery"
    />
  </div>
  <div v-if="matchesFound>0">
    <p class="mb-4" v-if="searchQuery.trim().length>0">
      {{enFilterT.matches(matchesFound,searchQuery)}}
    </p>
    <ArticleList :articles="filteredArticles"/>
  </div>
  <div
    v-else
    class="flex-1 flex flex-col items-center justify-center"
  >
    <p class="mb-2">
      {{enFilterT.matches(0,searchQuery)}}
    </p>
    <button
      class="text-primary hover:underline"
      @click="clearSearch"
    >
      {{enFilterT.clear}}
    </button>
  </div>
</div>
