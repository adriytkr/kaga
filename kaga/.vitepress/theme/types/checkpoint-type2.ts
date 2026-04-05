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
