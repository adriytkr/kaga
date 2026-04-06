<script setup lang="ts">
import { useCheckpointType1Single } from '~/composables/checkpoint/useCheckpointType1Single';
import CheckpointType1 from './CheckpointType1.vue';
import { inject } from 'vue';

defineProps<{
  choicesCount:number;
  correctChoice:number;
}>();

const {
  check,
  reset,
  reveal,
}=useCheckpointType1Single();

const x=inject<number>('x');

console.log(x);
</script>

<template>
  <CheckpointType1
    :choices-count="choicesCount"
    :correct-choices="[correctChoice]"
    :max="1"
    @check="check"
    @reset="reset"
    @reveal="reveal"
  >
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
      #[`choice-${i}`]
    >
      <slot :name="`choice-${i}`"></slot>
    </template>
  </CheckpointType1>
</template>
