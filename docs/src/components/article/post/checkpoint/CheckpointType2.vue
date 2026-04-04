<script setup lang="ts">
import BaseCheckpoint from './BaseCheckpoint.vue';

</script>

<template>
  <BaseCheckpoint
    @check="null"
    @reset="null"
    @reveal-answers="null"
  >
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #content>
      hi
    </template>
  </BaseCheckpoint>
</template>
