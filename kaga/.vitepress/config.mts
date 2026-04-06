import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "Kaga",
  description: "Yet to be written",
  head: [
    [
      'script',
      { id: 'check-theme' },
      `
        (function(){
          const theme=localStorage.getItem('theme')||'light';
          document.documentElement.dataset.theme=theme;
        })();
      `
    ],
  ],
  locales:{
    root:{
      lang:'en',
      label:'English',
    },
    'pt-br':{
      lang:'pt-br',
      label:'Português',
    },
  },
  vite:{
    plugins:[
      tailwindcss(),
    ],
    resolve:{
      alias:{
        '~':path.resolve(__dirname,'./theme'),
        '~~':path.resolve(__dirname,'..'),
        '~content':path.resolve(__dirname,'..','content'),
      },
    },
    publicDir:path.resolve(__dirname,'..','public'),
  },
  cleanUrls:true,
  markdown:{
    toc:{
      level:[2,3,4],
    },
  },
})
