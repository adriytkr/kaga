import type { Locale } from './types';
import { DEFAULT_LOCALE } from './constants';

export function getAbsoluteUrlWithoutLocale(
  locale:Locale,
  localizedUrl:string,
):string{
  const cleanPath=localizedUrl.replace(/^\/[a-z]{2}-[a-z]{2}\//, '/');

  const sanitizedUrl=
    locale===DEFAULT_LOCALE
      ?localizedUrl
      :cleanPath;

  return sanitizedUrl;
}

export function makeLocalizedUrl(
  locale:Locale,
  pureUrl:string,
):string{
  if(locale===DEFAULT_LOCALE)return pureUrl;

  return `/${locale}${pureUrl}`;
}
