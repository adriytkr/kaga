import { onMounted, onUnmounted, ref } from 'vue';

export function useSlides(totalSlides:number){
  const currentSlide=ref(0);
  const iframeRef=ref<HTMLIFrameElement|null>(null);

  function previousSlide(){
    if(currentSlide.value-1<0)return;

    currentSlide.value--;

    if(iframeRef.value?.contentWindow){
      iframeRef.value.contentWindow.focus();

      const method=JSON.stringify({ method: 'prev' });
      iframeRef.value.contentWindow.postMessage(method,'*');
    }
  }

  function nextSlide(){
    if(currentSlide.value+1>=totalSlides)return;

    currentSlide.value++;

    if(iframeRef.value?.contentWindow){
      iframeRef.value.contentWindow.focus();

      const method=JSON.stringify({ method: 'next' });
      iframeRef.value.contentWindow.postMessage(method,'*');
    }
  }

  function resetPresentation(){
    currentSlide.value=0;

    if(iframeRef.value?.contentWindow){
      iframeRef.value.contentWindow.focus();

      const method=JSON.stringify({ method: 'slide',args:[0] });
      iframeRef.value.contentWindow.postMessage(method,'*');
    }
  }

  function handleMessage(event:MessageEvent){
    const data=JSON.parse(event.data);
    console.log(data);

    const checkSlideChanged=
      data.namespace==='reveal'&&
      data.eventName==='slidechanged';

    if(checkSlideChanged){
      currentSlide.value=data.state.indexh;
    }
  }

  onMounted(()=>window.addEventListener('message',handleMessage));
  onUnmounted(()=>window.removeEventListener('message',handleMessage));

  return{
    iframeRef,
    currentSlide,
    previousSlide,
    nextSlide,
    resetPresentation,
  };
}
