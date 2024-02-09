<script lang="ts">
	import { writable } from 'svelte/store';

	// Define techniques and corresponding modal states
	let techniques = ['Technique 1', 'Technique 2', 'Technique 3'];
	let modalStates = techniques.map(() => writable(false));

	// Function to handle modal display
	function showModalOnClick(index: number) {
		modalStates[index].set(true);
		console.log(modalStates);
	}
</script>

<div>
	<h1 class="text-h3 duration-200 inline-block text-orange-50 cursor-pointer hover:text-orange-20">
		Find Your Skill
	</h1>

	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
		{#each techniques as technique, i}
			<div
				on:click={() => showModalOnClick(i)}
				class="border-2 p-4 bg-gray-200 cursor-pointer text-center"
			>
				{technique}
			</div>
		{/each}

		{#if modalStates === true}
			<h1>I am open</h1>
		{/if}
	</div>
</div>
