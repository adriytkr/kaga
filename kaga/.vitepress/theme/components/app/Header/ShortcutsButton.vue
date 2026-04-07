<script setup lang="ts">
import { useModal } from '~/composables/useModal';

import AppIconButton from '../AppIconButton.vue';
import KeyboardIcon from '~/components/icons/KeyboardIcon.vue';

import ShortcutsModal from './ShortcutsModal.vue';

const {
  dialogContext,
  isModalOpen:isShortcutsModalOpen,
  closeModal: closeShortcutsModal,
  openModal: openShortcutsModal,
}=useModal();
</script>

<template>
  <Teleport to="body">
    <ShortcutsModal
      ref="dialogContext"
      @close="closeShortcutsModal"
      class="opacity-0 transition-opacity duration-200"
      :class="{
        'opacity-100':isShortcutsModalOpen,
      }"
    />
  </Teleport>
  <AppIconButton @click="openShortcutsModal">
    <KeyboardIcon/>
  </AppIconButton>
</template>
