<script setup lang="ts">
import { ref } from 'vue';
import {useData} from 'vitepress';

import type {SearchFilter} from '~/types/filter';
import {filterT} from '~/i18n/locales/shared/filter';

const query=defineModel<string>({
  default:'',
})

const {lang}=useData();

const inputRef=ref<HTMLInputElement|null>(null);

function focusInput(){
  if(inputRef.value===null)return;

  inputRef.value.focus();
}

defineExpose<SearchFilter>({
  focusInput,
});

const t=filterT[lang.value];
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
