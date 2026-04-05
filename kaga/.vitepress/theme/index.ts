import type { Theme } from 'vitepress';

import './assets/styles/main.css';

import Layout from './layouts/Layout.vue';
import VpLink from './components/app/VpLink.vue';

export default {
  Layout,
  enhanceApp({ app, router, siteData }){
    app.component('VpLink',VpLink)
  },
} satisfies Theme

