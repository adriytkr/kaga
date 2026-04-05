// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

import {i18nConfig} from './config/i18n';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['./app/assets/styles/main.css'],
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/scripts',
  ],
  i18n:i18nConfig,
  colorMode:{
    fallback:'light',
    dataValue:'theme',
  },
})