<script setup lang="ts">
const currentYear=new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="max-w-2xl mx-auto p-4 flex justify-between items-center">
      <span>
        &copy; {{ currentYear }} Adriano
      </span>
      <span>
        Powered by
        <a href="https://vitepress.dev/" alt="">
          Vitepress
        </a>
      </span>
    </div>
  </footer>
</template>
