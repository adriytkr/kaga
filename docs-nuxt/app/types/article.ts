export type Heading={
  depth:number;
  text:string;
  slug:string;
};

export interface TocItem{
  depth:number;
  text:string;
  slug:string;
  children:TocItem[];
}

export interface SearchFilter{
  focusInput:()=>void;
}

export type ChoiceState=
  |'idle'
  |'selected'
  |'correct'
  |'incorrect'
  |'missed'
  |'hidden'
  |'disabled';

export type CheckpointType2Field<T>={
  validator:(value:T)=>boolean;
  default:T|null;
  answer:T;
}

export type Schema=Record<string,CheckpointType2Field<any>>;
export type FormState=Record<string,any>;

export type Type2State=
  'idle'|
  'correct'|
  'incorrect'|
  'revealed';

export type validationState=Record<string,Type2State>;
