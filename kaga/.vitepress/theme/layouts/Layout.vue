<script setup lang="ts">
import { useData } from 'vitepress';

import NormalLayout from './NormalLayout.vue';
import ArticleLayout from './ArticleLayout.vue';

const { frontmatter }=useData();
</script>

<template>
  <NormalLayout v-if="frontmatter.layout==='normal'"/>
  <ArticleLayout v-else-if="frontmatter.layout==='article'"/>
  <div v-else>
    <p>Couldn't load any layout :/</p>
  </div>
</template>
