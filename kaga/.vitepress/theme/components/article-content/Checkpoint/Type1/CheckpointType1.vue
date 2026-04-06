<script setup lang="ts">
import {useCheckpointType1} from '~/composables/checkpoint/useCheckpointType1';

import CommonCheckpoint from '../CheckpointCommon.vue';
import CheckpointChoice from './CheckpointChoice.vue';
import { provide } from 'vue';

const props=defineProps<{
  choicesCount:number;
  correctChoices:number[];
  max?:number;
}>();

defineEmits<{
  (e:'check'):void;
  (e:'reset'):void;
  (e:'reveal'):void;
}>();

const {
  selectedChoices,
  selectChoice,
}=useCheckpointType1();

provide<number>('x',5);
</script>

<template>
  <CommonCheckpoint
    @check="$emit('check')"
    @reset="$emit('reset')"
    @reveal="$emit('reveal')"
  >
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #body>
      <div>
        <slot name="body"></slot>
      </div>
      <div class="mb-4 font-bold">
        <slot name="command"></slot>
      </div>
      <div class="mb-4 flex flex-col gap-y-2">
        <CheckpointChoice
          v-for="i in choicesCount"
          :key="i"
          :state="'idle'"
          :disabled="false"
          @click="selectChoice(i)"
        >
          <slot :name="`choice-${i}`"></slot>
        </CheckpointChoice>
      </div>
    </template>
  </CommonCheckpoint>
</template>
