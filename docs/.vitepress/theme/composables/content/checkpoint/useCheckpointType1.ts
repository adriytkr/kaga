import { ref } from 'vue';

import {
  CheckpointType1Status,
  ChoiceStatus,
} from '~/types/article/checkpoint-type1';

export function useCheckpointType1(correctChoices:number[],max?:number){
  const selectedChoices=ref<number[]>([]);
  const status=ref<CheckpointType1Status>('idle');

  function selectChoice(index:number){
    // Lock interaction if already checked/revealed
    if (status.value === 'success' || status.value === 'revealed') return;

    // Reset status to idle if user starts changing things
    status.value = 'idle';

    const isAlreadySelected = selectedChoices.value.includes(index);

    if (isAlreadySelected) {
      selectedChoices.value = selectedChoices.value.filter(i => i !== index);
    } else {
      if (max === 1) {
        // Single choice logic (Radio behavior)
        selectedChoices.value = [index];
      } else if (selectedChoices.value.length < max) {
        // Multi choice logic (Checkbox behavior)
        selectedChoices.value.push(index);
      }
    }
  }

function check() {
    // Logic: Lengths must match and every selected item must be in correctChoices
    const isCorrect = 
      selectedChoices.value.length === correctChoices.length &&
      selectedChoices.value.every(val => correctChoices.includes(val));

    status.value = isCorrect ? 'success' : 'error';
  }

  function reset() {
    selectedChoices.value = [];
    status.value = 'idle';
  }

  function reveal() {
    status.value = 'revealed';
  }

function getChoiceStatus(index: number): ChoiceStatus {
    const isSelected = selectedChoices.value.includes(index);
    const isCorrect = correctChoices.includes(index);

    // 1. Reveal State: Show the truth regardless of selection
    if (status.value === 'revealed') {
      if (isCorrect) return 'correct';
      if (isSelected && !isCorrect) return 'incorrect';
      return 'idle';
    }

    // 2. Success/Error State: Highlight what the user picked
    if (status.value === 'success' || status.value === 'error') {
      if (isSelected) {
        return isCorrect ? 'correct' : 'incorrect';
      }
    }

    // 3. Idle State: Just show selection
    return isSelected ? 'selected' : 'idle';
  }

  return{
    selectedChoices,
    selectChoice,
    check,
    reset,
    reveal,
    getChoiceStatus,
  };
}
