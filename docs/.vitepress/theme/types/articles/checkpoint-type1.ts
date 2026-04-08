import {InjectionKey, Ref} from 'vue';

export type ChoiceStatus=
  'idle'|
  'selected'|
  'correct'|
  'incorrect'|
  'missed';

export type CheckpointType1Status=
  'idle'|
  'success'|
  'error'|
  'revealed';

export type CheckpointType1Context={
  selectedChoices:Ref<number[]>;
  selectChoice:(index:number)=>void;
  check:()=>void;
  reset:()=>void;
  reveal:()=>void;
  getChoiceStatus:(index:number)=>ChoiceStatus;
};

export const CheckpointType1ContextKey=Symbol() as InjectionKey<CheckpointType1Context>;
