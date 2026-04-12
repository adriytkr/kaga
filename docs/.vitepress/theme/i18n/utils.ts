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

export const makeLocalizedUrl=(
  locale:Locale,
  pureUrl:string,
):string=>
  locale===DEFAULT_LOCALE
    ?pureUrl
    :`/${locale}${pureUrl}`;
