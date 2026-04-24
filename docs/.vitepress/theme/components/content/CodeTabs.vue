<script setup>
import { ref, useSlots } from 'vue';

const slots=useSlots();
const tabs=Object.keys(slots);
const active=ref(tabs[0]);
</script>

<template>
  <div class="rounded-lg overflow-hidden border border-gray-700">
    <div class="flex border-b border-gray-700 bg-gray-900">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="[
          'px-4 py-2 text-sm font-medium transition-colors duration-150',
          active===tab
            ?'text-white border-b-2 border-blue-400'
            :'text-gray-400 hover:text-gray-200'
        ]"
        @click="active=tab"
      >
        {{ tab }}
      </button>
    </div>
    <div>
      <template v-for="tab in tabs" :key="tab">
        <div v-show="active === tab">
          <slot :name="tab"></slot>
        </div>
      </template>
    </div>
  </div>
</template>
