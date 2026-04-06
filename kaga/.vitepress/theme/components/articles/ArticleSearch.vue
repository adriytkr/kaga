<script setup lang="ts">
import { ref } from 'vue';
import {useData} from 'vitepress';

import type {SearchFilter} from '~/types/articles';
import {tFilter} from '~/i18n/locales/shared/filter';
import type { Locale } from '~/i18n';

const {lang}=useData();
const t=tFilter[lang.value as Locale];

const query=defineModel<string>({default:''})
const inputRef=ref<HTMLInputElement|null>(null);

function focusInput(){
  if(inputRef.value===null)return;

  inputRef.value.focus();
}

defineExpose<SearchFilter>({focusInput});
</script>

<template>
  <input
    ref="inputRef"
    type="text"
    v-model="query"
    :placeholder="t.placeholder"
    class="px-4 py-2 w-full max-w-md border border-surface-border/30 rounded-sm transition-colors duration-200 hover:border-surface-border"
  />
</template>
