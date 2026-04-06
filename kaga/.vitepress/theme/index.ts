import { Theme,inBrowser } from 'vitepress';

import './assets/styles/main.css';
import 'lite-youtube-embed/src/lite-yt-embed.css';

import Layout from './layouts/Layout.vue';

import VpLink from './components/app/VpLink.vue';

import TheoremBox from './components/article-content/TheoremBox.vue';

import MediaWithCaption from './components/article-content//MediaWithCaption.vue';
import ImageWithCaption from './components/article-content//ImageWithCaption.vue';
import YoutubeVideo from './components/article-content//YoutubeVideo.vue';

import AccordionBase from './components/article-content/Accordion/AccordionBase.vue';
import AccordionCommon from './components/article-content/Accordion/AccordionCommon.vue';

import CheckpointType1 from './components/article-content/Checkpoint/Type1/CheckpointType1.vue';
import CheckpointChoice from './components/article-content/Checkpoint/Type1/CheckpointChoice.vue';

import CheckpointType2 from './components/article-content/Checkpoint/Type2/CheckpointType2.vue';
import CheckpointBlank from './components/article-content/Checkpoint/Type2/CheckpointBlank.vue';
import CheckpointSelect from './components/article-content/Checkpoint/Type2/CheckpointSelect.vue';

export default {
  Layout,
  enhanceApp({ app, router, siteData }){
    app.component('VpLink',VpLink);

    app.component('TheoremBox',TheoremBox);

    app.component('MediaWithCaption',MediaWithCaption);
    app.component('ImageWithCaption',ImageWithCaption);
    app.component('YoutubeVideo',YoutubeVideo);

    app.component('AccordionBase',AccordionBase);
    app.component('AccordionCommon',AccordionCommon);

    app.component('CheckpointType1',CheckpointType1);
    app.component('CheckpointChoice',CheckpointChoice);

    app.component('CheckpointType2',CheckpointType2);
    app.component('CheckpointBlank',CheckpointBlank);
    app.component('CheckpointSelect',CheckpointSelect);

    if(inBrowser)import('lite-youtube-embed');
  },
} satisfies Theme

