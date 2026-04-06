---
layout: article
title: Eigenvectors
description: Some vectors don't change directions after a Linear Transformation
tags:
  - calculus
featured: true
---

<!-- <ManimSlides :slides="2">
  <template #slide-0>
    This is a circle. What do you think it will happen next?
  </template>

  <template #slide-1>
    This is a square. That is it...
  </template>

  This is super cool, right?
</ManimSlides> -->

<CheckpointType1Single
  :choices-count="4"
  :correct-choice="1"
>
  <template #title>Example: Real-life</template>
  <template #body>

A car takes 3 hours to reach its destination. It is known that the average velocity was  $x=5$

  </template>
  <template #command>What can you conclude about the travel?</template>

  <template #choice-0>The car always maintained a velocity greater than $36\,\mathrm{km/h}$.</template>

  <template #choice-1>The car attained a velocity of $36\,\mathrm{km/h}$ at some point.</template>

  <template #choice-2>The car traveled the entire travel at a velocity of $36\,\mathrm{km/h}$.</template>

  <template #choice-3>It is impossible to draw any conclusion.</template>

  <template #explanation>
    We know the position of the car is continuous and the car doesn't teleport, that is, the velocity changes continuously. Therefore, we can apply the Mean Value Theorem.

    Since the velocity of the car was given to be $36\,\mathrm{km/h}$, we can conclude that the speedometer showed at least once a speed of $36\,\mathrm{km/h}$.
  </template>
</CheckpointType1Single>
