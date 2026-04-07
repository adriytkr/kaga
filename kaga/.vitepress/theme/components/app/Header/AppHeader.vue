<script setup lang="ts">
import { computed, ref } from 'vue';

import { useHideOnScroll } from '~/composables/useHideOnScroll';
import { useTheme } from '~/composables/useTheme';

import NavTooltip from '../NavTooltip.vue';

import AppLogo from '~icons/LogoIcon.vue';

import BrowserIcon from '~/components/icons/BrowserIcon.vue';

import SearchButton from './SearchButton.vue';
import QuickReferenceButton from './QuickReferenceButton.vue';
import ShortcutsButton from './ShortcutsButton.vue';

import LanguagePicker from './LanguagePicker.vue';
import ThemeToggleButton from './ThemeToggleButton.vue';

const {scrollClass,showHeader}=useHideOnScroll();

const {theme}=useTheme();
const themeTooltipMessage=computed<string>(()=>
  theme.value==='light'
    ?'Switch to dark theme'
    :'Switch to light theme'
);

const isLanguagePickerModalOpen=ref(false);
</script>

<template>
  <header :class="[
      'sticky z-50 bg-background transition-transform duration-300 ease-in-out top-0 [&.scroll-down]:-translate-y-full [&.scroll-up]:translate-y-0',
      scrollClass,
    ]"
  >
    <nav class="max-w-4xl mx-auto p-4 flex justify-between items-center">
      <VpLink to="/">
        <AppLogo/>
      </VpLink>
      <div class="flex items-center">
        <div class="flex items-center gap-x-4">
          <NavTooltip>
            <VpLink
              to="/articles"
              class="text-muted transition-colors duration-200 hover:text-body focus:text-body"
            >
              <BrowserIcon/>
            </VpLink>
            <template #tooltip>
              Browse Articles
            </template>
          </NavTooltip>
          <NavTooltip>
            <QuickReferenceButton/>
            <template #tooltip>
              Quick Reference
            </template>
          </NavTooltip>
          <NavTooltip>
            <ShortcutsButton/>
            <template #tooltip>
              Show Shortcuts
            </template>
          </NavTooltip>
          <SearchButton @show-header="showHeader"/>
        </div>
        <div class="h-5 w-0.5 mx-4 bg-slate-200"></div>
        <div class="flex items-center gap-x-4">
          <NavTooltip :disabled="isLanguagePickerModalOpen">
            <LanguagePicker v-model:open="isLanguagePickerModalOpen"/>
            <template #tooltip>
              Switch Language
            </template>
          </NavTooltip>
          <NavTooltip>
            <ThemeToggleButton/>
            <template #tooltip>
              {{ themeTooltipMessage }}
            </template>
          </NavTooltip>
        </div>
      </div>
    </nav>
  </header>
</template>
