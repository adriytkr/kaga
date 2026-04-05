import type { TSchema } from '../../types';
import { enNavT } from '../en/navT';

export type NavT={
  articles:string;
};

export const navT:TSchema<NavT>={
  en:enNavT,
  'pt-br':enNavT,
};
