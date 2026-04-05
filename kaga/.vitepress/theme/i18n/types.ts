export type Locale='en'|'pt-br';

export interface LocaleItem{
  code:Locale;
  label:string;
}

export type TSchema<T>=Record<Locale,T>;
