<script setup lang="ts">
defineProps<{
  isOpen:boolean;
}>();

defineEmits<{
  (e:'close'):void;
}>();
</script>

<template>
  <div
    class="fixed w-full h-full z-999 top-0 left-0 pointer-events-none"
    :class="{
      'pointer-events-auto! bg-black/40 backdrop-blur-xs':isOpen,
    }"
    @click.self="$emit('close')"
  >
    <slot></slot>
  </div>
</template>
