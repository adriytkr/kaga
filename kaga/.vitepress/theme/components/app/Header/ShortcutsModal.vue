<script setup lang="ts">
import { DialogContext } from '~/types/dialog';
import { useDialog } from '~/composables/useDialog';

import AppIconButton from '~/components/app/AppIconButton.vue';
import CloseIcon from '~/components/icons/CloseIcon.vue';

import KeyboardKey from '~/components/app/KeyboardKey.vue';
import ArrowKeyIcon from '~/components/icons/ArrowKeyIcon.vue';

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
      <h2 class="font-medium">Keyboard Shortcuts</h2>
      <AppIconButton @click="$emit('close')">
        <CloseIcon/>
      </AppIconButton>
    </header>
    <ul class="flex flex-col gap-y-4">
      <li class="flex justify-between items-center">
        <span>Toggle Search</span>
        <div class="flex gap-x-2 items-center">
          <KeyboardKey is-not-single>
            Ctrl
          </KeyboardKey>
          <span class="font-bold">+</span>
          <KeyboardKey>
            K
          </KeyboardKey>
        </div>
      </li>
      <li class="flex justify-between items-center">
        <span>Scroll Up</span>
        <KeyboardKey>K</KeyboardKey>
      </li>
      <li class="flex justify-between items-center">
        <span>Scroll Down</span>
        <KeyboardKey>J</KeyboardKey>
      </li>
      <li class="flex justify-between items-center">
        <span>Open Shortcuts Modal</span>
        <KeyboardKey>?</KeyboardKey>
      </li>
    </ul>
  </dialog>
</template>
