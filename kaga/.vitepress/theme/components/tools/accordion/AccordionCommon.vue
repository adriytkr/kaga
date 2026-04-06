<template>
  <AccordionBase>
    <template #label="{isOpen}">
      <slot name="label"></slot>
      <!-- Chevron Icon -->
      <svg
        class="inline-block mt-0 -rotate-90"
        :class="{
          'rotate-90':!isOpen,
        }"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960" fill="currentColor"
      >
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
      </svg>
    </template>
    <slot></slot>
  </AccordionBase>
</template>
