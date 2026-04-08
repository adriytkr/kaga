<script setup lang="ts">
const {isNotSingle=false}=defineProps<{
  isNotSingle?:boolean;
}>();
</script>

<template>
  <span class="inline-flex">
    <kbd
      class="min-w-10 h-10 inline-flex justify-center items-center bg-border-color rounded-sm font-semibold font-mono"
      :class="{
        'px-4':isNotSingle,
      }"
    >
      <slot></slot>
    </kbd>
  </span>
</template>
