<script setup lang="ts">
import {useTheme} from '~/composables/useTheme';

import SunIcon from '~/components/icons/SunIcon.vue';
import MoonIcon from '~/components/icons/MoonIcon.vue';

const {theme,toggleTheme}=useTheme();
</script>

<template>
  <button
    @click="toggleTheme"
    class="text-muted transition-colors duration-200 hover:text-body"
  >
     <SunIcon v-if="theme==='light'"/>
     <MoonIcon v-else/>
  </button>
</template>
