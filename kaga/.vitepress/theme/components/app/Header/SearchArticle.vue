<script setup lang="ts">
import SearchIcon from '~icons/SearchIcon.vue';
import KeyboardKey from '../KeyboardKey.vue';
</script>

<template>
  <button class="group flex items-center border border-border-color rounded-sm p-2 transition-colors duration-200 hover:border-body">
    <SearchIcon class="transition-colors duration-200 group-hover:text-body group-focus:text-body"/>
    <span class="ml-2 mr-6">Search articles</span>
    <KeyboardKey>Ctrl K</KeyboardKey>
  </button>
</template>
