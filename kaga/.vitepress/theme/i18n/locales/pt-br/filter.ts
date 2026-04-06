import type {TFilterSchema} from '../shared/filter';

export const filter:TFilterSchema={
  placeholder:'Pesquisar artigos por título, palavras-chaves, ...',
  matches(count:number,query:string){
    if(count===0)return `Nenhum resultado para "${query}"`;
    if(count===1)return `1 resultado para "${query}"`;

    return `Nenhum resultado para "${query}"`;
  },
  clear:'Limpar Pesquisa',
};
