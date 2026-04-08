<script setup lang="ts">
import { DialogContext } from '~/types/dialog';
import { useDialog } from '~/composables/useDialog';

import AppIconButton from '~/components/app/AppIconButton.vue';
import CloseIcon from '~/components/icons/CloseIcon.vue';

import KeyboardKey from '~/components/app/KeyboardKey.vue';

import {tNav} from '~/i18n/locales/shared/nav';
import { useData } from 'vitepress';
import {
  convertStringToLocale,
  DEFAULT_LOCALE,
} from '~/i18n';
import ShortcutsModalItem from './ShortcutsModalItem.vue';

const {lang}=useData();
const t=tNav[convertStringToLocale(lang.value)??DEFAULT_LOCALE];

defineEmits<{
  (e:'close'):void;
}>();

const {
  dialogRef,
  context,
}=useDialog();

defineExpose<DialogContext>(context);
</script>

<template>
  <dialog
    ref="dialogRef"
    class="w-xl shadow-lg bg-background p-4 rounded-sm top-1/2 left-1/2 -translate-1/2 backdrop:bg-black/40 backdrop:backdrop-blur-sm"
    @click.self="$emit('close')"
  >
    <header class="flex justify-between items-center mb-4">
      <h2 class="font-medium">
        {{ t.shortcuts.title }}
      </h2>
      <AppIconButton @click="$emit('close')">
        <CloseIcon/>
      </AppIconButton>
    </header>
    <ul class="flex flex-col gap-y-4">
      <ShortcutsModalItem>
        {{ t.shortcuts.list.searchArticles }}
        <template #keys>
          <KeyboardKey is-not-single>
            Ctrl
          </KeyboardKey>
          <span class="font-bold">+</span>
          <KeyboardKey>
            K
          </KeyboardKey>
        </template>
      </ShortcutsModalItem>
      <ShortcutsModalItem>
        {{ t.shortcuts.list.quickReference }}
        <template #keys>
          <KeyboardKey>R</KeyboardKey>
        </template>
      </ShortcutsModalItem>
      <ShortcutsModalItem>
        {{ t.shortcuts.list.shortcutsModal }}
        <template #keys>
          <KeyboardKey>?</KeyboardKey>
        </template>
      </ShortcutsModalItem>
      <ShortcutsModalItem>
        {{ t.shortcuts.list.scrollUp }}
        <template #keys>
          <KeyboardKey>K</KeyboardKey>
        </template>
      </ShortcutsModalItem>
      <ShortcutsModalItem>
        {{ t.shortcuts.list.scrollDown }}
        <template #keys>
          <KeyboardKey>J</KeyboardKey>
        </template>
      </ShortcutsModalItem>
    </ul>
  </dialog>
</template>
