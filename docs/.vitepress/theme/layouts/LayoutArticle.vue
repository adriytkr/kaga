<script setup lang="ts">
import { Content } from 'vitepress';

import LayoutBase from './LayoutBase.vue';
</script>

<template>
  <LayoutBase>
    <div class="max-w-2xl h-full mx-auto px-4 py-12">
      <article class="prose max-w-none prose-a:text-primary prose-headings:text-body prose-p:text-muted prose-strong:text-body prose-hr:border-t-border-color
        [&_mjx-container]:inline-block
        [&_mjx-container]:text-muted
        [&_mjx-container[display='true']]:my-8
        [&_mjx-container[display='true']]:flex!
        [&_mjx-container[display='true']]:justify-center!
      ">
        <Content/>
      </article>
    </div>
  </LayoutBase>
</template>
