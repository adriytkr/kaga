import type {TSchema} from '../../types';
import { enFilterT } from '../en/filter';

export type FilterT={
  placeholder:string;
  matches:(count:number,query:string)=>string;
  clear:string;
}

export const filterT:TSchema<FilterT>={
  en:enFilterT,
  'pt-br':enFilterT,
};
