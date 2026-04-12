import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue';

export function usePresentation(totalSlides:number){
  const iframeRef=ref<HTMLIFrameElement|null>(null);

  const currentSlide=ref(0);

  const isStarted=ref(false);
  const isLoaded=ref(false);
  const isPlaying=ref(false);

  const feedbackRef=ref<HTMLDivElement|null>(null);

  function start(){
    isPlaying.value=true;
    isStarted.value=true;
    currentSlide.value=0;
  }

  function goToFirstSlide(){
    currentSlide.value=0;

    if(iframeRef.value?.contentWindow){
      const method=JSON.stringify({ method: 'slide', args:[0,0] });
      iframeRef.value.contentWindow.postMessage(method,'*');
    }
  }

  function goToLastSlide(){
    currentSlide.value=totalSlides-1;

    if(iframeRef.value?.contentWindow){
      const method=JSON.stringify({ method: 'slide',args:[totalSlides-1,0] });
      iframeRef.value.contentWindow.postMessage(method,'*');
    }
  }

  function goToPreviousSlide(){
    if(currentSlide.value-1<0)return;

    currentSlide.value--;

    if(iframeRef.value?.contentWindow){
      const method=JSON.stringify({ method: 'prev' });
      iframeRef.value.contentWindow.postMessage(method,'*');
    }
  }

  function goToNextSlide(){
    if(currentSlide.value+1>=totalSlides)return;

    currentSlide.value++;

    if(iframeRef.value?.contentWindow){
      const method=JSON.stringify({ method: 'next' });
      iframeRef.value.contentWindow.postMessage(method,'*');
    }
  }

  function play(){
    if(!isStarted.value)start();

    if(iframeRef.value?.contentWindow){
      const method=JSON.stringify({ method: 'triggerKey',args:[32] });
      iframeRef.value.contentWindow.postMessage(method,'*');
    }
  }

  function pause(){
    if(iframeRef.value?.contentWindow){
      const method=JSON.stringify({ method: 'triggerKey',args:[32] });
      iframeRef.value.contentWindow.postMessage(method,'*');
    }
  }

  function togglePlay(){
    isPlaying.value=!isPlaying.value;

    if(isPlaying.value) play();
    else pause();

    showFeedback();
  }

  async function showFeedback(){
    if(feedbackRef.value===null)return;

    feedbackRef.value.classList.remove('animate-feedback');
    void feedbackRef.value.offsetWidth;
    feedbackRef.value.classList.add('animate-feedback');
  }

  function handleMessage(event:MessageEvent){
    const data=JSON.parse(event.data);
    console.log(data);

    const checkSlideChanged=
      data.namespace==='reveal'&&
      data.eventName==='slidechanged';

    if(checkSlideChanged)
      currentSlide.value=data.state.indexh;
  }

  onMounted(()=>window.addEventListener('message',handleMessage));
  onUnmounted(()=>window.removeEventListener('message',handleMessage));

  return{
    iframeRef,
    isStarted,
    isLoaded,
    isPlaying,
    feedbackRef,
    start,

    currentSlide,

    goToFirstSlide,
    goToLastSlide,

    goToPreviousSlide,
    goToNextSlide,

    togglePlay,
  };
}
