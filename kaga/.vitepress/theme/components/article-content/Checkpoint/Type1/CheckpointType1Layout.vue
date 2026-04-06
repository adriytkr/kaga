<script setup lang="ts">
import {inject} from 'vue';

import {
  CheckpointType1ContextKey,
  ChoiceStatus,
} from '~/types/articles/checkpoint-type1';

import CheckpointBase from '../CheckpointBase.vue';
import CheckpointChoice from './CheckpointChoice.vue';

defineProps<{
  choicesCount:number;
}>();

defineEmits<{
  (e:'select-choice',index:number):void;
  (e:'check'):void;
  (e:'reset'):void;
  (e:'reveal'):void;
}>();

const context=inject(CheckpointType1ContextKey,null);

if(context===null)
  throw Error('No context provided');

function getChoiceStatus(index:number):ChoiceStatus{
  if(context===null)return 'idle';

  const isSelected=context?.selectedChoices.value.includes(index);
  if(isSelected)return 'selected';

  return 'idle';
}
</script>

<template>
  <CheckpointBase
    @check="context.check"
    @reset="context.reset"
    @reveal="context.reveal"
  >
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #body>
      <div>
        <slot name="body"></slot>
      </div>
      <div>
        <slot name="command"></slot>
      </div>
      <div class="flex flex-col gap-y-2">
        <CheckpointChoice
          v-for="i in choicesCount"
          :key="i"
          :status="getChoiceStatus(i-1)"
          :disabled="context.isLocked.value"
          @click="context.selectChoice(i-1)"
        >
          <slot :name="`choice-${i-1}`"></slot>
        </CheckpointChoice>
      </div>
    </template>
    <template #explanation>
      <slot name="explanation"></slot>
    </template>
  </CheckpointBase>
</template>
