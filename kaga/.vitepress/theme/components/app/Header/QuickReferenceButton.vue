<script setup lang="ts">
import { useModal } from '~/composables/useModal';

import AppIconButton from '../AppIconButton.vue';
import QuickReferenceIcon from '~/components/icons/QuickReferenceIcon.vue';

import AppModal from '../AppModal.vue';
import QuickReferenceModal from './QuickReferenceModal.vue';

const {
  isModalOpen:isQuickReferenceModalOpen,
  closeModal: closeQuickReferenceModal,
  openModal: openQuickReferenceModal,
}=useModal();
</script>

<template>
  <Teleport to="body">
    <AppModal
      :is-open="isQuickReferenceModalOpen"
      @close="closeQuickReferenceModal"
    >
      <QuickReferenceModal
        class="opacity-0 transition-opacity duration-200"
        :class="{
          'opacity-100':isQuickReferenceModalOpen,
        }"
        @close="closeQuickReferenceModal"
      />
    </AppModal>
  </Teleport>
  <AppIconButton @click="openQuickReferenceModal">
    <QuickReferenceIcon/>
  </AppIconButton>
</template>
