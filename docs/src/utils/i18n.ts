import type { Locale } from '@/types/i18n';

export const DEFAULT_LOCALE:Locale='en';

export function convertStringToLocale(str:string):Locale|undefined{
  if(str==='en')return 'en';
  if(str==='pt-br')return 'pt-br';
}
