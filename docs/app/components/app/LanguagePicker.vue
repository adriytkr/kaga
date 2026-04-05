<script setup lang="ts">
const isOpen=ref<boolean>(false);

const {locale,locales}=useI18n();

const currentLocaleName=computed<string>(()=>{
  const query=locales.value
    .find(l=>l.code===locale.value);

  if(
    query===undefined||
    query.name===undefined
  )return '???';

  return query.name;
}
);
</script>

<template>
  <div class="relative">
    <button
      @click="isOpen=!isOpen"
      class="flex items-center gap-x-1 text-muted transition-colors duration-200 hover:text-body"
    >
      {{currentLocaleName}}
      <!-- Chevron Icon -->
      <svg
        class="rotate-90"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960" fill="currentColor"
      >
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
      </svg>
    </button>
    <div
      class="absolute right-0 top-full w-32 mt-2 bg-surface shadow-xl rounded-sm overflow-hidden opacity-0 pointer-events-none transition-opacity duration-200 [&.is-open]:opacity-100 [&.is-open]:pointer-events-auto"
      :class="{
        'is-open':isOpen,
      }"
    >
      <AppLanguagePickerButton
        v-for="locale in locales"
        :key="locale.code"
        :locale="locale.code"
      >
        {{ locale.name }}
      </AppLanguagePickerButton>
    </div>
  </div>
</template>
