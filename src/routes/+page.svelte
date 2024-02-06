<script>
	import { fade } from 'svelte/transition';
	let name = 'mister';

	let isReady = false;
</script>

<main>
	{#if isReady}
		<h1 transition:fade>Hello {name}</h1>
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
