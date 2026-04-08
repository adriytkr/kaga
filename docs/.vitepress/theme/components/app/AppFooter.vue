<script setup lang="ts">
const date=new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="max-w-4xl mx-auto p-4 flex justify-between items-center text-sm">
      <span>
        &copy; {{date}} Kaga
      </span>
      <span>
        Powered by <a href="https://vitepress.dev/">Vitepress</a>
      </span>
    </div>
  </footer>
</template>
