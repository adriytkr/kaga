<script setup lang="ts">
import type { Locale } from '@/types/i18n';
import { DEFAULT_LOCALE } from '@utils/i18n';

const props=defineProps<{
  href:string;
  pathname:string;
  locale:Locale;
}>();

const absoluteHref=props.locale===DEFAULT_LOCALE
  ?props.href
  :`/${props.locale}${props.href}`;

const isActive=
  props.pathname===absoluteHref||
  props.pathname===`${absoluteHref}/`;
</script>

<template>
  <a 
    :href="absoluteHref"
    :class="{
      'is-active':isActive,
    }"
    :aria-current="isActive?'page':undefined"
  >
    <slot></slot>
  </a>
</template>
