import {InjectionKey, Ref} from 'vue';

export type CheckpointType1Context={
  selectedChoices:Ref<number[]>;
  selectChoice:(index:number)=>void;
  check:()=>void;
  reset:()=>void;
  reveal:()=>void;
  isLocked:Ref<boolean>;
};

export const CheckpointType1ContextKey=Symbol() as InjectionKey<CheckpointType1Context>;

export type ChoiceStatus=
  'idle'|
  'selected'|
  'correct'|
  'wrong'|
  'missed';
