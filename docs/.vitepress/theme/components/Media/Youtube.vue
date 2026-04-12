<script setup lang="ts">
import Media from './Media.vue';

defineProps<{
  id:string;
}>();
</script>

<template>
  <Media>
    <template #media>
      <lite-youtube
        :videoid="id"
        class="relative w-full h-auto rounded-md overflow-hidden"
        params="vq=hd720"
      />
    </template>
    <template #caption>
      <slot></slot>
    </template>
  </Media>
</template>
