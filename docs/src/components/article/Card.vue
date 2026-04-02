<script setup lang="ts">
import placeholderThumbnail from '@assets/images/placeholder.webp';
import type { ArticleDifficulty, FilterLabel } from '@types/article';
import { inject } from 'vue';

defineProps<{
  thumbnail?:string;
  alt?:string;
  title:string;
  description:string;
  difficulty:ArticleDifficulty;
}>();

const t=inject<FilterLabel>('t')!;
</script>

<template>
  <div class="flex flex-col max-h-80">
    <div class="aspect-video mb-2">
      <img
        :src="thumbnail??placeholderThumbnail.src"
        :alt="alt??''"
        class="w-full h-full rounded-sm object-cover"
      />
    </div>
    <div class="flex-1">
      <h2 class="font-medium text-lg">{{title}}</h2>
      <p class="text-sm">{{description}}</p>
    </div>
    <div
      class="text-right"
      :class="{
        'text-green-400':difficulty==='easy',
        'text-yellow-400':difficulty==='medium',
        'text-red-600':difficulty==='hard',
      }"
    >
      <span>{{ t.difficulties[difficulty] }}</span>
    </div>
  </div>
</template>
