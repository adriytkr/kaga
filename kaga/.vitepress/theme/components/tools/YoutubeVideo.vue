<script setup lang="ts">
import {} from 'lite-youtu';

defineProps<{
  id:string;
}>();
</script>

<template>
  <MediaWithCaption>
    <template #media>
      <lite-youtube
        :videoid="id"
        class="relative w-full h-auto rounded-sm overflow-hidden"
        params="modestbranding=1&rel=0&vq=hd720"
      />
    </template>
    <slot></slot>
  </MediaWithCaption>
</template>
