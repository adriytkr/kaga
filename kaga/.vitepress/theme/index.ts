import type { Theme } from 'vitepress';

import './assets/styles/main.css';

import Layout from './layouts/Layout.vue';

import VpLink from './components/app/VpLink.vue';

import TheoremBox from './components/tools/TheoremBox.vue';

import MediaWithCaption from './components/tools/MediaWithCaption.vue';
import ImageWithCaption from './components/tools/ImageWithCaption.vue';
import YoutubeVideo from './components/tools/YoutubeVideo.vue';

import AccordionBase from './components/tools/accordion/AccordionBase.vue';
import AccordionCommon from './components/tools/accordion/AccordionCommon.vue';

import BaseCheckpoint from './components/tools/checkpoint/BaseCheckpoint.vue';
import CommonCheckpoint from './components/tools/checkpoint/CommonCheckpoint.vue';

import CheckpointType1 from './components/tools/checkpoint/type1/CheckpointType1.vue';
import CheckpointChoice from './components/tools/checkpoint/type1/CheckpointChoice.vue';

import CheckpointType2 from './components/tools/checkpoint/type2/CheckpointType2.vue';
import CheckpointBlank from './components/tools/checkpoint/type2/CheckpointBlank.vue';

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

    app.component('BaseCheckpoint',BaseCheckpoint);
    app.component('CommonCheckpoint',CommonCheckpoint);

    app.component('CheckpointType1',CheckpointType1);
    app.component('CheckpointChoice',CheckpointChoice);

    app.component('CheckpointType2',CheckpointType2);
    app.component('CheckpointBlank',CheckpointBlank);
  },
} satisfies Theme

