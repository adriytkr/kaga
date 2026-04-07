import {
  ref,
  watch,
  onUnmounted,
} from 'vue';

export function useModal(){
  const isModalOpen=ref(false);

  function openModal(){
    isModalOpen.value=true;
    document.body.style.overflow='hidden';
  }

  function closeModal(){
    isModalOpen.value=false;
    document.body.style.overflow='auto';
  }

  function handleEsc(event:KeyboardEvent){
    if(event.key==='Escape'&&isModalOpen.value)
      closeModal();
  }

  watch(
    isModalOpen,
    (isOpen)=>{
      if(isOpen){
        window.addEventListener('keydown',handleEsc);
        return;
      }

      window.removeEventListener('keydown',handleEsc);
    },
    {immediate:true},
  );

  onUnmounted(()=>window.removeEventListener('keydown', handleEsc));

  return{
    isModalOpen,
    openModal,
    closeModal,
  };
}
