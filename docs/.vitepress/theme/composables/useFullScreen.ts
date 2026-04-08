import {ref} from 'vue';

export function useFullScreen(){
  const isFullScreen=ref<boolean>(false);

  function handleEsc(event:KeyboardEvent){
    if(event.key==='Escape'&&isFullScreen.value)
      toggleFullScreen();
  }

  function enterFullScreen(){
    document.body.style.overflow='hidden';
    window.addEventListener('keydown',handleEsc)
  }

  function exitFullScreen(){
    document.body.style.overflow='';
    window.removeEventListener('keydown',handleEsc)
  }

  function toggleFullScreen(){
    isFullScreen.value=!isFullScreen.value;

    if(isFullScreen.value){
      enterFullScreen();
      return;
    }

    exitFullScreen();
  }

  return{
    isFullScreen,
    toggleFullScreen,
  };
}
