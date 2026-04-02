<script setup lang="ts">
import { inject } from 'vue';

import type { FilterLabel } from '@/types/t';

import SidebarFilterGroup from './SidebarFilterGroup.vue';
import SidebarFilterCheckbox from './SidebarFilterCheckbox.vue';

defineProps<{
  categories:string[];
}>();

const selectedCategories=defineModel<string[]>(
  {default:[]},
);

const t=inject<FilterLabel>('t')!;
</script>

<template>
  <SidebarFilterGroup :title="t['categoryTitle']">
    <SidebarFilterCheckbox
      v-for="category in categories"
      :key="category"
      :value="category"
      v-model="selectedCategories"
    >
      {{ category }}
    </SidebarFilterCheckbox>
  </SidebarFilterGroup>
</template>
