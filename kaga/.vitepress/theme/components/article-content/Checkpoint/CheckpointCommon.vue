<script setup lang="ts">
import BaseCheckpoint from './CheckpointBase.vue';
import AppButton from '~/components/app/AppButton.vue';

defineEmits<{
  (e:'check'):void;
  (e:'reset'):void;
  (e:'reveal'):void;
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
      <AppButton @click="$emit(`check`)">
        Check
      </AppButton>
      <AppButton @click="$emit(`reset`)">
        Reset
      </AppButton>
      <AppButton @click="$emit(`reveal`)">
        Reveal Answers
      </AppButton>
    </template>
  </BaseCheckpoint>
</template>

