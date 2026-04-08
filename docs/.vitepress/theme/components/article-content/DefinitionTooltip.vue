<script setup lang="ts">
import {useTooltip} from '~/composables/useTooltip';

const {
  reference,
  floating,
  floatingStyles,
  isVisible,
  show,
  hide,
}=useTooltip();
</script>

<template>
  <span class="inline-flex">
    <span
    class="inline-flex underline underline-offset-4 decoration-dotted cursor-help"
      ref="reference"
      @mouseenter="show"
      @mouseleave="hide"
    >
      <slot></slot>
    </span>
    <div
      ref="floating"
      :style="floatingStyles"
      class="z-[9999] max-w-xs bg-gray-900 text-white text-xs px-3 py-2 rounded shadow-xl pointer-events-none opacity-0 transition-opacity duration-200"
      :class="{
        'opacity-100':isVisible
      }"
    >
      <slot name="tooltip"></slot>
    </div>
  </span>
</template>
