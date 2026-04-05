<script setup lang="ts">
import {computed, ref} from 'vue';
import {useData} from 'vitepress';

import type {LocaleItem} from '~/i18n/types';

import LanguagePickerButton from './LanguagePickerButton.vue';

const isOpen=ref<boolean>(false);

const {site,lang}=useData();

const locales=computed<LocaleItem[]>(()=>
  Object
    .entries(site.value.locales)
    .map(([code,value])=>({
      code:value.lang,
      label:value.label,
    }))
);

const currentLanguage=computed<string>(()=>{
  const current=locales.value.find(l=>l.code===lang.value);
  return current!==undefined
    ?current.label
    :'English';
});
</script>

<template>
  <div class="relative">
    <button
      @click="isOpen=!isOpen"
      class="flex items-center gap-x-1 text-muted transition-colors duration-200 hover:text-body"
    >
      {{ currentLanguage }}
      <!-- Chevron Icon -->
      <svg
        class="rotate-90"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960" fill="currentColor"
      >
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
      </svg>
    </button>
    <div
      class="absolute z-50 right-0 top-full w-32 mt-2 bg-surface shadow-xl rounded-sm overflow-hidden opacity-0 pointer-events-none transition-opacity duration-200"
      :class="{
        'opacity-100 pointer-events-auto!':isOpen,
      }"
    >
      <LanguagePickerButton
        v-for="locale in locales"
        :key="locale.code"
        :locale="locale.code"
      >
        {{ locale.label }}
      </LanguagePickerButton>
    </div>
  </div>
</template>
