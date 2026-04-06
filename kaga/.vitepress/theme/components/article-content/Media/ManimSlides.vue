<script setup lang="ts">
import { useSlides } from '~/composables/useSlides';

import AppButton from '~/components/app/AppButton.vue';
import MediaWithCaption from './MediaWithCaption.vue';

const props = defineProps<{
  slides:number;
}>();

const {
  iframeRef,
  currentSlide,
  previousSlide,
  nextSlide,
}=useSlides(props.slides);
</script>

<template>
  <div>
    <MediaWithCaption>
      <template #media>
        <iframe 
          src="/animations/eigenvectors/presentation.html"
          width="100%" 
          height="500px" 
          ref="iframeRef"
          class="rounded-sm overflow-hidden"
          allowfullscreen
        ></iframe>
      </template>
      <slot></slot>
    </MediaWithCaption>
    <div class="flex flex-col">
      <div class="flex gap-x-4 mb-4">
        <AppButton
          @click="previousSlide"
          :disabled="currentSlide===0"
        >
          Previous
        </AppButton>
        <AppButton
          @click="nextSlide"
          :disabled="currentSlide===slides-1"
        >
          Next
        </AppButton>
      </div>
      <slot :name="`slide-${currentSlide}`"></slot>
    </div>
  </div>
</template>
