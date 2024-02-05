<script script="ts">
	import Carousel from './Carousel.svelte';

	let techniques = ['upper body', 'lower body'];

	let showModal = false;

	function showModalOnClick() {
		showModal = !showModal;
	}
</script>

<section class="border-2 min-h-[580px] px-20 pt-9">
	<h1 class="text-h3 duration-200 inline-block text-orange-50 cursor-pointer hover:text-orange-20">
		Find Your Skill
	</h1>

	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
		{#each techniques as technique, i}
			<div on:click={showModalOnClick} class="border-2 p-4 bg-gray-200 cursor-pointer text-center">
				{technique}
			</div>
		{/each}
	</div>
</section>
