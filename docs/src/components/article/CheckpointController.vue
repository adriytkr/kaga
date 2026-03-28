<script setup lang="ts">
import { ref } from 'vue';

const props=defineProps<{
  title:string;
  totalSteps:number;
}>();

const currentStep=ref(0);

const nextStep=()=>{
  if(currentStep.value < props.totalSteps - 1)currentStep.value++;
};

const prevStep=()=>{
  if(currentStep.value > 0)currentStep.value--;
};
</script>

<template>
  <div class="overflow-hidden my-10">
    <div class="flex justify-between items-center">
      <div>
        <span class="text-xs font-mono text-manim-teal uppercase tracking-widest">Checkpoint</span>
        <h3 class="text-lg font-bold mt-0">{{ title }}</h3>
      </div>
      <div class="text-right mt-0">
        <span class="text-sm font-mono">{{ currentStep + 1 }} / {{ totalSteps }}</span>
      </div>
    </div>
    <div class="my-6">
      <slot :name="`step-${currentStep}`"></slot>
    </div>
    <div class="mt-0 flex justify-between">
      <button 
        @click="prevStep" 
        :disabled="currentStep===0"
        class="px-4 py-2 rounded-lg text-sm font-bold transition-all disabled:opacity-30 cursor-pointer"
      >
        ← Previous
      </button>
      <button 
        @click="nextStep" 
        :disabled="currentStep===totalSteps-1"
        class="mt-0 px-4 py-2 rounded-lg text-sm font-bold transition-all disabled:opacity-30 cursor-pointer"
      >
        Next Question →
      </button>
    </div>
  </div>
</template>
