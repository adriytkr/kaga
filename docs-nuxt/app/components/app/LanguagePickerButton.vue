<script setup lang="ts">
import type { Locale } from '~~/types/i18n';

defineProps<{
  locale:Locale;
}>();
</script>

<template>
  <NuxtLink
    :to="$switchLocalePath(locale)"
    class="px-6 py-2 text-muted block transition-colors duration-200 hover:text-body hover:no-underline hover:bg-white"
    exact-active-class="font-bold text-body"
  >
    <slot></slot>
  </NuxtLink>
</template>
