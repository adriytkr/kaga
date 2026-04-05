import type {FilterT} from '~/i18n/types';

export const enFilterT:FilterT={
  placeholder:'Search articles by title, keywords, ...',
  matches(count:number,query:string){
    if(count===0)return `No matches for "${query}"`;
    if(count===1)return `One match for "${query}"`;

    return `${count} matches for "${query}"`;
  },
  clear:'Clear Search',
};
