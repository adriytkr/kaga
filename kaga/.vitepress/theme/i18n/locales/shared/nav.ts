import type { TSchema } from '../../types';
import { nav as nav_en } from '../en/nav';
import { nav as nav_pt_br } from '../pt-br/nav';

export type TNavSchema={
  articles:string;
};

export const tNav:TSchema<TNavSchema>={
  en:nav_en,
  'pt-br':nav_pt_br,
};
