<script setup lang="ts">
const route=useRoute();
const {locale}=useI18n();

const slug=route.params.slug;

const {data:article,error}=await useAsyncData(
  `article-${slug}-${locale.value}`,
  async()=>await queryCollection('articles')
    .where('path','LIKE',`%/${locale.value}/${slug}`)
    .first(),
  {watch:[locale]}
);

if(!article.value&&!error.value)
  throw createError({
    statusCode:404,
    statusMessage:'Article not found'
  });
</script>

<template>
  <template v-if="article">
    <ContentRenderer :value="article"/>
  </template>
</template>
