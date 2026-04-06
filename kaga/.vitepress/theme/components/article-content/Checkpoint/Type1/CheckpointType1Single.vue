<script setup lang="ts">
import { provide } from 'vue';

import { useCheckpointType1 } from '~/composables/checkpoint/useCheckpointType1';

import {
  CheckpointType1Context,
  CheckpointType1ContextKey,
} from '~/types/articles/checkpoint-type1';

import CheckpointType1Layout from './CheckpointType1Layout.vue';

const props=defineProps<{
  choicesCount:number;
  correctChoice:number;
}>();

const {
  selectedChoices,
  selectChoice,
  check,
  reset,
  reveal,
  getChoiceStatus,
}=useCheckpointType1(
  [props.correctChoice],
  1,
);

const context:CheckpointType1Context={
  selectedChoices,
  selectChoice,
  check,
  reset,
  reveal,
  getChoiceStatus,
};

provide(CheckpointType1ContextKey,context);
</script>

<template>
  <CheckpointType1Layout :choicesCount="choicesCount">
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #body>
      <slot name="body"></slot>
    </template>
    <template #command>
      <slot name="command"></slot>
    </template>
    <template
      v-for="i in choicesCount"
      :key="i"
      #[`choice-${i-1}`]
    >
      <slot :name="`choice-${i-1}`"></slot>
    </template>
    <template #explanation>
      <slot name="explanation"></slot>
    </template>
  </CheckpointType1Layout>
</template>
