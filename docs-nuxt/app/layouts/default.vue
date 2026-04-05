<script setup lang="ts">
import BaseLayout from './base-layout.vue';
</script>

<template>
  <BaseLayout>
    <div class="max-w-4xl h-full mx-auto p-4">
      <slot></slot>
    </div>
  </BaseLayout>
</template>
