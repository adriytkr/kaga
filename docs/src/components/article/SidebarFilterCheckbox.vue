<script setup lang="ts" generic="T">
defineProps<{
  value:T;
}>();

const difficulty=defineModel<T|T[]>({default:[]});
</script>

<template>
  <div>
    <input
      type="checkbox"
      :id="value"
      :value="value"
      v-model="difficulty"
    >
    <label :for="value" class="ml-2">
      <slot></slot>
    </label>
  </div>
</template>
