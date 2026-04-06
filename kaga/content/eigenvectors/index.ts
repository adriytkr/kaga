import type {Schema,CheckpointType2Field} from '~/types/articles/checkpoint-type2';

export type RubyNickname='major'|'minor';

export const age:CheckpointType2Field<number>={
  validator(age:number){
    return age===20;
  },
  default:3,
  answer:5,
};

export const nickname:CheckpointType2Field<RubyNickname>={
  validator(nickname:RubyNickname){
    return nickname==='major';
  },
  default:null,
  answer:'major',
};

export const schema1:Schema={
  age,
  nickname,
};
