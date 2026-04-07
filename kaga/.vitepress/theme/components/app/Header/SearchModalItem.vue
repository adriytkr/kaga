<script setup lang="ts">
defineProps<{
  isSelected:boolean;
}>();
</script>

<template>
  <li class="m-2">
    <a
      href="#"
      class="block p-4 rounded-sm transition-colors duration-200 hover:bg-border-color hover:no-underline"
      :class="{
        'bg-surface!':isSelected,
      }"
    >
      <h2 class="text-body font-medium">This is an article</h2>
      <p class="text-muted">
        This is a super long description of the article, really, really long description. Do you believe in me?
      </p>
    </a>
  </li>
</template>
