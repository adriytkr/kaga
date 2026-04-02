<script setup lang="ts">
import { inject } from 'vue';

import placeholderThumbnail from '@assets/images/placeholder.webp';

import type {ArticleDifficulty} from '@/types/article';
import type {FilterLabel} from '@/types/t';
import type { Locale } from '@/types/i18n';

import LinkLocale from '@components/navigation/LinkLocale.vue';

defineProps<{
  to:string;
  title:string;
  description:string;
  thumbnail?:string;
  alt?:string;
  difficulty:ArticleDifficulty;
}>();

const t=inject<FilterLabel>('t')!;
const locale=inject<Locale>('locale')!;
</script>

<template>
  <LinkLocale
    class="flex flex-col max-h-80 text-body"
    :href="`/articles/${to}`"
    pathname="/articles"
    :locale="locale"
  >
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
  </LinkLocale>
</template>
