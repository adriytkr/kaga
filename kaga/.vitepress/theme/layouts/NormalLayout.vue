<script setup lang="ts">
import {Content} from 'vitepress';

import BaseLayout from './BaseLayout.vue';
</script>

<template>
  <BaseLayout>
    <div class="max-w-4xl h-full mx-auto p-4">
      <Content/>
    </div>
  </BaseLayout>
</template>
