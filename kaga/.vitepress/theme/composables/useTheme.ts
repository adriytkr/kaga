import { ref } from 'vue';
import type {Theme} from '~/types/theme';

export function useTheme() {
  const theme=ref<Theme>('light');

  const toggleTheme=()=>{
    const newTheme=theme.value==='light'
      ?'dark'
      :'light';

    theme.value=newTheme;
    localStorage.setItem('user-theme',newTheme);
    document.documentElement.setAttribute('data-theme',newTheme);
  }

  return {
    theme,
    toggleTheme,
  };
}
