<script setup lang="ts">
import type { ArticlesCollectionItem } from '@nuxt/content';

defineProps<{
  articles:ArticlesCollectionItem[];
}>();
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    <ArticleCard
      v-for="article in articles"
      :key="article.id"
      :slug="article.stem.split('/').pop()??'???'"
      :title="article.title"
      :description="article.description"
      :tags="article.tags"
    />
  </div>
</template>
