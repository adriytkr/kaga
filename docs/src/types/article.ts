export type ChoiceStatus=
  'default'|
  'selected'|
  'correct'|
  'missed'|
  'incorrect';

export type Heading={
  depth:number;
  slug:string;
  text:string;
};

export interface TocItem {
  depth: number;
  text: string;
  slug: string;
  children: TocItem[];
}

export type ArticleDifficulty=
  'easy'|
  'medium'|
  'hard';

export interface ArticleSchema{
  data:{
    title:string;
    description:string;
    longDescription:string;
    difficulty:ArticleDifficulty;
    categories:string[];
  };
  slug:string;
  [key:string]:any;
}

export type FilterLabel={
  searchPlaceholder: string;
  difficultyTitle: string;
  categoryTitle: string;
  difficulties: {
    easy: string;
    medium: string;
    hard: string;
  },
  empty:string;
}
