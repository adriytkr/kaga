---
layout: article
title: Eigenvectors
description: Some vectors don't change directions after a Linear Transformation
tags:
  - calculus
featured: true
---

<TheoremBox>

  **Mean Value Theorem** This is a super important theorem in Calculus.

</TheoremBox>

<MediaWithCaption>
  <template #media>
    <img
      src="/images/placeholder-img.png"
      alt=""
      class="w-full h-auto block object-cover rounded-sm"
    />
  </template>
  Azur Lane Wallpaper
</MediaWithCaption>

<ImageWithCaption src="/images/admiral-graf-spee.jpg">
  Azur Lane Wallpaper II
</ImageWithCaption>

<AccordionBase>
  <template #label>
    This is a tes
  </template>

this is a test
</AccordionBase>

<AccordionCommon>
  <template #label>
    This is a tes
  </template>

this is a secret
</AccordionCommon>

<BaseCheckpoint>
  <template #title>
    Hello, World!
  </template>
  <template #body>
    Hello, World!
  </template>
  <template #actions>
    Hello, World!
  </template>
</BaseCheckpoint>

<CommonCheckpoint>
  <template #title>
    Hello, World!
  </template>
  <template #body>
    Fix this shit
  </template>
</CommonCheckpoint>

<script setup lang="ts">
import {schema1} from '~content/eigenvectors/';
</script>

<CheckpointType2 :schema="schema1">
  <template #title>
    Hello, World!
  </template>
  <template #body>
    Kaga is twice as old as her sister.
    Her sister is 10 years old. Therefore, Kaga is <CheckpointBlank name="age"/> years old.
  </template>
</CheckpointType2>

<CheckpointType1
  :choices-count="3"
  :correct-choices="[1]"
  :max="1"
>
  <template #title>
    Hello, World!
  </template>
  <template #body>
    This is a question
  </template>
  <template #command>
    Choose only one alternative
  </template>
  <template #choice-1>
    hi
  </template>
  <template #choice-2>
    hi22
  </template>
  <template #choice-3>
    hi3
  </template>
</CheckpointType1>
