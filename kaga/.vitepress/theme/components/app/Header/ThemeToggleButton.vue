<script setup lang="ts">
import {useTheme} from '~/composables/useTheme';

import AppIconButton from '../AppIconButton.vue';
import SunIcon from '~/components/icons/SunIcon.vue';
import MoonIcon from '~/components/icons/MoonIcon.vue';

const {theme,toggleTheme}=useTheme();
</script>

<template>
  <AppIconButton @click="toggleTheme">
     <SunIcon v-if="theme==='light'"/>
     <MoonIcon v-else/>
  </AppIconButton>
</template>
