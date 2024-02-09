<<<<<<< HEAD
<!-- YourComponent.svelte -->
<script>
	import Hero from '@/components/Hero.svelte';
	import Carousel from '@/components/Carousel.svelte';
</script>

<!-- YourComponent's HTML structure -->
<div class="relative grid max-w-[1024px] gap-32 mx-auto">
	<Hero />
	<Carousel />
</div>
=======
<script>
	import { fade } from 'svelte/transition';
	let name = 'mister';

	let isReady = false;
</script>

<main>
	{#if isReady}
		<h1 transition:fade>Hello {name}</h1>
		<p>new commit</p>
	{/if}
	<button on:click={() => (isReady = !isReady)}>Fade</button>
</main>

<style>
	main {
		min-height: 100vh;
		border: 1px solid green;

		justify-content: center;
		align-items: center;
		display: grid;
	}
	h1 {
		border: 1px solid green;
	}
	button {
		cursor: pointer;
		border-radius: 0.4rem;
		padding: 1rem;
	}
</style>
>>>>>>> master
