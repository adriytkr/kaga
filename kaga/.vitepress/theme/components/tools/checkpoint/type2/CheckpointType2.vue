<script setup lang="ts">
import type { Schema } from '~/types/article';
import {useCheckpointType2} from '~/composables/checkpoint/useCheckpointType2';

import CommonCheckpoint from '../CommonCheckpoint.vue';

const props= defineProps<{
  schema:Schema;
}>();

const {
  checkAnswers,
  reset,
  revealAnswers,
}=useCheckpointType2(props.schema);
</script>

<template>
  <CommonCheckpoint
    @check="checkAnswers"
    @reset="reset"
    @reveal-answers="revealAnswers"
  >
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #body :state="formState">
      <slot name="body"></slot>
    </template>
  </CommonCheckpoint>
</template>
