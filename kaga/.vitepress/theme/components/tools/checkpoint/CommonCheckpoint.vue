<script setup lang="ts">
import CheckpointButton from './CheckpointButton.vue';

import {} from '~/components';

defineEmits<{
  (e:'check'):void;
  (e:'reset'):void;
  (e:'reveal-answers'):void;
}>();
</script>

<template>
  <BaseCheckpoint>
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #body>
      <slot name="body"></slot>
    </template>
    <template #actions>
      <CheckpointButton @click="$emit(`check`)">
        Check
      </CheckpointButton>
      <CheckpointButton @click="$emit(`reset`)">
        Reset
      </CheckpointButton>
      <CheckpointButton @click="$emit(`reveal-answers`)">
        Reveal Answers
      </CheckpointButton>
    </template>
  </BaseCheckpoint>
</template>

