<script setup lang="ts">
defineProps<{
  id:string;
  title:string;
}>();
</script>

<template>
  <MediaWithCaption>
    <template #media>
      <ScriptYouTubePlayer
        :video-id="id"
        class="relative w-full h-auto rounded-sm overflow-hidden"
      >
        <template #awaitingLoad>
          <div class="absolute inset-0 z-50 backdrop-blur-xs flex items-center justify-center">
            <button class="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 -960 960 960" fill="currentColor">
                <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/>
              </svg>
            </button>
          </div>
        </template>
        <template #loading>
          <div class="absolute inset-0 z-50 backdrop-blur-xs flex items-center justify-center">
            <button class="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 -960 960 960" fill="currentColor" class="animate-spin">
                <path d="M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480.5-80Q398-80 325-111.5Z"/>
              </svg>
            </button>
          </div>
        </template>
      </ScriptYouTubePlayer>
    </template>
    <slot></slot>
  </MediaWithCaption>
</template>
