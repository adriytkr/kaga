// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Bismarck',
      components: {
        Footer: './src/components/layout/TheFooter.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'pt-BR': {
          label: 'Português',
          lang: 'pt-BR',
        },
      },
      sidebar: [
        {
          label: 'View all Articles',
          link: '/articles',
          translations: {
            'pt-BR': 'Ver todos os artigos'
          },
        },
        {
          label: 'Calculus',
          collapsed: true,
          autogenerate: {
            directory: 'articles/calculus',
          },
          translations: {
            'pt-BR': 'Cálculo'
          },
        },
        {
          label: 'Advanced Calculus',
          collapsed: true,
          autogenerate: {
            directory: 'articles/advanced-calculus',
          },
          translations: {
            'pt-BR': 'Cálculo Avançado'
          },
        },
        {
          label: 'Linear Algebra',
          collapsed: true,
          autogenerate: {
            directory: 'articles/linear-algebra',
          },
          translations: {
            'pt-BR': 'Algebra Linear'
          },
        },
        {
          label: 'Physics',
          collapsed: true,
          autogenerate: {
            directory: 'articles/physics',
          },
          translations: {
            'pt-BR': 'Física'
          },
        },
        {
          label: 'Competitive Programming',
          collapsed: true,
          autogenerate: {
            directory: 'articles/competitive-programming',
          },
          translations: {
            'pt-BR': 'Programação Competitiva'
          },
        },
        {
          label: 'Statistics',
          collapsed: true,
          autogenerate: {
            directory: 'articles/statistics',
          },
          translations: {
            'pt-BR': 'Estatística'
          },
        },
      ],
      customCss: ['./src/assets/styles/global.css'],
    }),
    vue(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});