import { ref } from 'vue';

export function useCheckpointType1(){
  const selectedChoices=ref<number[]>([]);

  function selectChoice(index:number){}

  return{
    selectedChoices,
    selectChoice,
  };
}
