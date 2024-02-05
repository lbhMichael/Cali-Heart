<script>
	import { fly, fade } from 'svelte/transition';
	import Portal from './Portal.svelte';
	import { outsideClick } from './OutsideClick';

	export let isModalOpen = false;

	function closeModal() {
		isModalOpen = false;
	}
</script>

{#if isModalOpen}
	<Portal>
		<div
			use:outsideClick
			on:click-outside={closeModal}
			class="modal"
			transition:fly={{ opacity: 0, y: 100 }}
		>
			<button on:click={closeModal} aria-label="Close">Close</button>
			<slot />
		</div>
		<div on:click={closeModal} transition:fade class="background" />
	</Portal>
{/if}
s

<style>
	.modal {
		position: fixed;
		inset: 0;
		min-width: 320px;
		max-width: 530px;
		max-height: 100px;
		margin: 5rem auto;
		width: 100%;
		z-index: 101;
	}
	button {
		position: fixed;
		cursor: pointer;
	}
	.background {
		background: black;
		cursor: pointer;
		position: fixed;
		inset: 0;
		z-index: 100;
		height: 100%;
		width: 100%;
		opacity: 0.9;
	}
</style>
