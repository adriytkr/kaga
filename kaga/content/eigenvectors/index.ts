import type {Schema,CheckpointType2Field} from '~/types/checkpoint-type-2';

export const age:CheckpointType2Field<number>={
  validator(age:number){
    return age===20;
  },
  default:3,
  answer:5,
};

export const schema1:Schema={
  age,
};
