<script setup lang="ts">
import AppHeader from '~/components/app/Header/AppHeader.vue';
import AppFooter from '~/components/app/AppFooter.vue';
</script>

<template>
	<div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
		<AppHeader/>
		<main>
			<slot></slot>
		</main>
		<AppFooter/>
	</div>
</template>
