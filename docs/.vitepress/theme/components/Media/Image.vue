<script setup lang="ts">
import Media from './Media.vue';

defineProps<{
  src?:string;
  alt?:string;
}>();
</script>

<template>
  <Media>
    <template #media>
      <img
        :src="src??'/images/placeholder-img.png'"
        :alt="alt??''"
        class="w-full h-auto block object-cover rounded-md"
      />
    </template>
    <template #caption>
      <slot></slot>
    </template>
  </Media>
</template>
