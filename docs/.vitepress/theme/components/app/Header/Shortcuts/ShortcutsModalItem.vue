<template>
  <li class="flex justify-between items-center">
    <span>
      <slot></slot>
    </span>
    <div class="flex gap-x-2 items-center">
      <slot name="keys"></slot>
    </div>
  </li>
</template>
