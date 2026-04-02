<script setup lang="ts">
import type { ArticleDifficulty, FilterLabel } from '@types/article';
import SidebarFilterGroup from './SidebarFilterGroup.vue';
import SidebarFilterCheckbox from './SidebarFilterCheckbox.vue';
import { inject } from 'vue';

const props=
defineProps<{
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
