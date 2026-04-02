<script setup lang="ts">
import { inject } from 'vue';

import type { ArticleDifficulty } from '@/types/article';
import type { FilterLabel } from '@/types/t';

import SidebarFilterGroup from './SidebarFilterGroup.vue';
import SidebarFilterCheckbox from './SidebarFilterCheckbox.vue';

const props=defineProps<{
  difficulties:ArticleDifficulty[];
}>();

const selectedDifficulties=defineModel<ArticleDifficulty[]>(
  {default:[]},
);

const t=inject<FilterLabel>('t')!;
</script>

<template>
  <SidebarFilterGroup :title="t['difficultyTitle']">
    <SidebarFilterCheckbox
      v-for="difficulty in difficulties"
      :key="difficulty"
      :value="difficulty"
      v-model="selectedDifficulties"
    >
      {{ t.difficulties[difficulty] }}
    </SidebarFilterCheckbox>
  </SidebarFilterGroup>
</template>
