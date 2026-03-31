<script setup lang="ts">
import CheckpointChoice from './CheckpointChoice.vue';
import CheckpointButton from './CheckpointButton.vue';

import { useCheckpoint } from '@/composables/useCheckpoint';

const props=defineProps<{
  choicesCount:number;
  choices:number[];
}>();

const {
  getStatus,
  selectChoice,
  emptyState,
  isSubmitted,
  checkChoices,
  retry,
}=useCheckpoint(props.choices);
</script>

<template>
  <div class="flex justify-between items-center">
    <span class="text-gray-400">
      <slot name="title"></slot>
    </span>
    <button class="bg-transparent cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960" fill="currentColor">
        <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/>
      </svg>
    </button>
  </div>
  <slot name="question"></slot>
  <div class="font-bold">
    <slot name="command"></slot>
  </div>
  <div>
    <CheckpointChoice
      v-for="i in choicesCount"
      :key="i"
      :status="getStatus(i-1)"
      :disabled="isSubmitted"
      @click="selectChoice(i-1)"
    >
      <slot :name="`choice-${i-1}`"></slot>
    </CheckpointChoice>
  </div>
  <div class="flex gap-x-4 items-center">
    <CheckpointButton
      @click="checkChoices"
      :disabled="emptyState"
    >
      Check
    </CheckpointButton>
    <CheckpointButton
      v-if="isSubmitted"
      @click="retry"
    >
      Retry
    </CheckpointButton>
  </div>
</template>
