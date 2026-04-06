<script setup lang="ts">
defineProps<{
  src?:string;
  alt?:string;
}>();
</script>

<template>
  <MediaWithCaption>
    <template #media>
      <img
        :src="src??'/images/placeholder-img.png'"
        :alt="alt??''"
        class="w-full h-auto block object-cover rounded-sm"
      />
    </template>
    <slot></slot>
  </MediaWithCaption>
</template>
