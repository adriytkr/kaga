<script setup lang="ts">
import { inject } from 'vue';

import type { FilterLabel } from '@/types/t';

const searchQuery=defineModel<string>(
  'query',
  {default:''},
);

const t=inject<FilterLabel>('t')!;
</script>

<template>
  <input
    v-model="searchQuery"
    :placeholder="t.searchPlaceholder"
    class="w-full px-4 py-2 rounded-sm border border-muted hover:border-body"
  />
</template>
