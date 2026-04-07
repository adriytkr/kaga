import { ref } from 'vue';
import {
  useFloating,
  flip,
  shift,
  offset
} from '@floating-ui/vue';

export function useTooltip(delay:number=200,disabled:boolean=false){
  const reference=ref(null);
  const floating=ref(null);
  const isVisible=ref(false);

  const { floatingStyles }=useFloating(
    reference,
    floating,
    {
      placement: 'top',
      middleware: [
        offset(10),
        flip(),
        shift({ padding: 8 }),
      ],
    },
  );

  let timeoutId:ReturnType<typeof setTimeout>|null=null;

  function show(){
    if(disabled)return;

    timeoutId=setTimeout(
      ()=>isVisible.value=true,
      delay,
    );
  }

  function hide(){
    if(timeoutId!==null)clearTimeout(timeoutId);

    isVisible.value=false;
  }

  return{
    reference,
    floating,
    isVisible,
    floatingStyles,
    show,
    hide,
  };
}
