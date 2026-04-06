import type {TSchema} from '../../types';
import { filter as filter_en } from '../en/filter';
import { filter as filter_pt_br } from '../pt-br/filter';

export type TFilterSchema={
  placeholder:string;
  matches:(count:number,query:string)=>string;
  clear:string;
}

export const tFilter:TSchema<TFilterSchema>={
  en:filter_en,
  'pt-br':filter_pt_br,
};
