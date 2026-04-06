<script setup lang="ts">
import { ChoiceStatus } from '~/types/articles/checkpoint-type1';

defineProps<{
  status:ChoiceStatus;
}>();
</script>

<template>
  <button
    class="block w-full text-left px-4 py-2 rounded-sm border border-transparent"
    :class="{
      'bg-slate-200':status==='idle',
      'bg-slate-200 border-surface-border!':status==='selected',
    }"
  >
    <slot></slot>
    {{ status }}
  </button>
</template>
