<script setup lang="ts">
import {useFullScreen} from '~/composables/useFullScreen';

import AppButton from '~/components/app/AppButton.vue';
import CheckpointHeader from './CheckpointHeader.vue';
import AccordionCommon from '../Accordion/AccordionCommon.vue';

defineEmits<{
  (e:'check'):void;
  (e:'reset'):void;
  (e:'reveal'):void;
}>();

const { isFullScreen }=useFullScreen();
</script>

<template>
  <Teleport
    to="body"
    :disabled="!isFullScreen"
  >
    <div
      class="group mb-8"
      :class="{
        'is-full-screen fixed w-full h-full top-0 left-0 bg-surface z-50':isFullScreen
      }"
    >
      <CheckpointHeader v-model="isFullScreen">
        <slot name="title"></slot>
      </CheckpointHeader>
      <div class="my-4">
        <slot name="body"></slot>
      </div>
      <div class="flex gap-x-4">
        <AppButton @click="$emit('check')">Check</AppButton>
        <AppButton @click="$emit('reset')">Reset</AppButton>
        <AppButton @click="$emit('reveal')">Reveal</AppButton>
      </div>
      <AccordionCommon>
        <template #label>
          Show solution
        </template>
        <slot name="explanation"></slot>
      </AccordionCommon>
    </div>
  </Teleport>
</template>
