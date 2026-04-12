import { ref } from 'vue';
import {
  useFloating,
  flip,
  shift,
  offset,
  autoUpdate
} from '@floating-ui/vue';

export function useTooltip(delay:number=200){
  const reference=ref(null);
  const floating=ref(null);
  const isVisible=ref(false);

  const { floatingStyles }=useFloating(
    reference,
    floating,
    {
      placement: 'top',
      whileElementsMounted:autoUpdate,
      middleware: [
        offset(5),
        flip(),
        shift({ padding: 8 }),
      ],
    },
  );

  let timeoutId:ReturnType<typeof setTimeout>|null=null;

  function show(){
    timeoutId=setTimeout(
      ()=>isVisible.value=true,
      delay,
    );
  }

  function hide(){
    if(timeoutId!==null)clearTimeout(timeoutId);

    isVisible.value=false;
  }

  function toggle(){
    if(isVisible.value){
      show();
      return;
    }

    hide();
  }

  return{
    reference,
    floating,
    isVisible,
    floatingStyles,
    show,
    hide,
    toggle,
  };
}
