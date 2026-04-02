<script setup lang="ts">
import type { ArticleDifficulty, FilterLabel } from '@types/article';
import SidebarFilterDifficulty from './SidebarFilterDifficulty.vue';
import SidebarFilterCategories from './SidebarFilterCategories.vue';
import { inject } from 'vue';

defineProps<{
  difficultiesList:ArticleDifficulty[];
  categoriesList:string[];
}>();

const searchQuery=defineModel<string>(
  'query',
  {default:''},
);

const selectedDifficulties=defineModel<ArticleDifficulty[]>(
  'difficulties',
  {default:[]},
);

const selectedCategories=defineModel<string[]>(
  'categories',
  {default:[]},
);

const t=inject<FilterLabel>('t')!;
</script>

<template>
  <div>
    <div class="mb-12">
      <input
        v-model="searchQuery"
        :placeholder="t.searchPlaceholder"
        class="w-full px-4 py-2 rounded-sm border border-muted hover:border-body"
      />
    </div>
    <SidebarFilterDifficulty
      v-model="selectedDifficulties"
      :difficulties="difficultiesList"
    />
    <SidebarFilterCategories
      v-model="selectedCategories"
      :categories="categoriesList"
    />
  </div>
</template>
