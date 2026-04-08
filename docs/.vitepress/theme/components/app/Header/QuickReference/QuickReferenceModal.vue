<script setup lang="ts">
import { useDialog } from '~/composables/useDialog';

import type { DialogContext } from '~/types/dialog';

import {tNav} from '~/i18n/locales/shared/nav';
import { useData } from 'vitepress';
import {
  convertStringToLocale,
  DEFAULT_LOCALE,
} from '~/i18n';

const {lang}=useData();
const t=tNav[convertStringToLocale(lang.value)??DEFAULT_LOCALE];

const {
  dialogRef,
  context,
}=useDialog();

defineExpose<DialogContext>(context);
</script>

<template>
  <dialog
    ref="dialogRef"
    class="w-2xl shadow-lg bg-background rounded-sm top-1/2 left-1/2 -translate-1/2 backdrop:bg-black/40 backdrop:backdrop-blur-sm"
    @click.self="$emit('close')"
  >
    <h2 class="font-medium">
      {{ t.quickReference.title }}
    </h2>
  </dialog>
</template>
