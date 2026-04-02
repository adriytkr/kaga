<script setup lang="ts">
defineProps<{
  title:string;
}>();
</script>

<template>
  <div>
    <h2 class="mb-2 font-medium text-xl">{{ title }}</h2>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
