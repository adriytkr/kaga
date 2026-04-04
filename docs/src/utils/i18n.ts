import type { Locale } from '@/types/i18n';

export function getAbsoluteUrlWithoutLocale(
  locale:Locale,
  localizedUrl:string,
):string{
  const cleanPath=localizedUrl.replace(/^\/[a-z]{2}-[a-z]{2}\//, "/");

  const sanitizedUrl=
    locale==='en'
      ?localizedUrl
      :cleanPath;

  return sanitizedUrl;
}

export function makeLocalizedUrl(
  locale:Locale,
  pureUrl:string,
):string{
  if(locale==='en')return pureUrl;

  return `/${locale}${pureUrl}`;
}
