<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';

import {
  convertStringToLocale,
  makeLocalizedUrl,
} from '~/i18n/utils';

const props=defineProps<{
  to:string;
  locale?:string;
}>();

const { lang }=useData()

const localizedPath=computed(()=>
  makeLocalizedUrl(
    convertStringToLocale(props.locale??lang.value)??'en',
    props.to,
  ),
)
</script>

<template>
  <a :href="localizedPath">
    <slot></slot>
  </a>
</template>
