<script setup lang="ts">
import { Content,useData } from 'vitepress';

import BaseLayout from './BaseLayout.vue';

const {page}=useData();
</script>

<template>
  <BaseLayout>
    <div class="max-w-2xl h-full mx-auto p-4">
      <article>
        <Content/>
        {{ page.headers }}
      </article>
    </div>
  </BaseLayout>
</template>
