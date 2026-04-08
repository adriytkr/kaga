import {ref} from 'vue';

export function useSearch(){
  const isSearchModalOpen=ref(false);

  return{
    isSearchModalOpen,
  };
}
