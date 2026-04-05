<script setup lang="ts">
import {useData,useRoute} from 'vitepress';

import type { Locale } from '~/i18n/types';
import {getAbsoluteUrlWithoutLocale} from '~/i18n/utils';

const props = defineProps<{
  locale:Locale;
}>();

const route=useRoute();
const {lang}=useData();
</script>

<template>
  <VpLink
    :to="getAbsoluteUrlWithoutLocale(lang,route.path)"
    :locale="locale"
    class="px-6 py-2 text-muted block transition-colors duration-200 hover:text-body hover:no-underline hover:bg-white"
    exact-active-class="font-bold text-body"
  >
    <slot></slot>
  </VpLink>
</template>
