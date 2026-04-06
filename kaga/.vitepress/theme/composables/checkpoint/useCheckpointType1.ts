import { ref } from 'vue';

export function useCheckpointType1(correctChoice:number){
  const selectedChoices=ref<number[]>([]);
  const isLocked=ref(false);

  function selectChoice(index:number){
    selectedChoices.value.push(index);
  }

  function check(){
    console.log('checking...');
  }

  function reset(){
    console.log('reset...');
  }

  function reveal(){
    console.log('reveal...');
  }

  return{
    selectedChoices,
    selectChoice,
    check,
    reset,
    reveal,
    isLocked,
  };
}
