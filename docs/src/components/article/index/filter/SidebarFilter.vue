<script setup lang="ts">
import { inject } from 'vue';

import type { ArticleDifficulty } from '@/types/article';

import SidebarFilterSearch from './SidebarFilterSearch.vue';
import SidebarFilterDifficulty from './SidebarFilterDifficulty.vue';
import SidebarFilterCategories from './SidebarFilterCategories.vue';

const searchQuery=defineModel<string>(
  'query',
  {default:''},
);

const difficulties=inject<ArticleDifficulty[]>('difficulties')!;

const selectedDifficulties=defineModel<ArticleDifficulty[]>(
  'difficulties',
  {default:[]},
);

const categories=inject<string[]>('categories')!;

const selectedCategories=defineModel<string[]>(
  'categories',
  {default:[]},
);
</script>

<template>
  <div>
    <div class="mb-12">
      <SidebarFilterSearch v-model="searchQuery"/>
    </div>
    <div class="mb-16">
      <SidebarFilterDifficulty
        v-model="selectedDifficulties"
        :difficulties="difficulties"
      />
    </div>
    <SidebarFilterCategories
      v-model="selectedCategories"
      :categories="categories"
    />
  </div>
</template>
