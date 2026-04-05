<script setup lang="ts">
import Header from '~/components/app/Header.vue';
import Footer from '~/components/app/Footer.vue';
</script>

<template>
	<div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
		<Header/>
		<main>
			<slot></slot>
		</main>
		<Footer/>
	</div>
</template>
