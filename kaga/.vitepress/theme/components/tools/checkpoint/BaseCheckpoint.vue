<script setup lang="ts">
import {useBaseCheckpoint} from '~/composables/checkpoint/useBaseCheckpoint';

import CheckpointHeader from './CheckpointHeader.vue';
import CheckpointActions from './CheckpointActions.vue';

const { isFullScreen }=useBaseCheckpoint();
</script>

<template>
  <Teleport
    to="body"
    :disabled="!isFullScreen"
  >
    <div
      class="group mb-8"
      :class="{
        'is-full-screen fixed w-full h-full top-0 left-0 bg-surface z-50':isFullScreen
      }"
    >
      <CheckpointHeader v-model="isFullScreen">
        <slot name="title"></slot>
      </CheckpointHeader>
      <div class="my-4">
        <slot name="body"></slot>
      </div>
      <CheckpointActions>
        <slot name="actions"></slot>
      </CheckpointActions>
    </div>
  </Teleport>
</template>
