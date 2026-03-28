<script setup lang="ts">
import type { CheckpointChoiceState } from './types';

defineProps<{
  state:CheckpointChoiceState;
  isDisabled:boolean;
}>();
</script>

<template>
  <button 
    :disabled="isDisabled"
    :class="[
      'w-full text-left rounded-md px-5 py-4 transition-all duration-200 flex items-start gap-3 cursor-pointer',
      state==='correct'
        ? 'bg-emerald-400/10 border border-emerald-400'
        : state==='incorrect' ? 'bg-rose-400/10 border border-rose-400' : '',
    ]"
  >
    <div class="flex-1">
      <slot></slot>
    </div>
  </button>
</template>

