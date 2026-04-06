import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue';

export function useHideOnScroll(){
  const scrollClass=ref('');
  let lastScrollY=0;

  function handleScroll(){
    const currentScrollY=window.scrollY;

    if(Math.abs(currentScrollY-lastScrollY)<10)return;

    const scrollDownFlag=
      currentScrollY>lastScrollY&&
      currentScrollY>80;

    scrollClass.value=scrollDownFlag?'scroll-down':'scroll-up';
    
    lastScrollY=currentScrollY;
  };

  onMounted(()=>window.addEventListener('scroll',handleScroll));
  onUnmounted(()=>window.removeEventListener('scroll',handleScroll));

  return{
    scrollClass,
  };
}
