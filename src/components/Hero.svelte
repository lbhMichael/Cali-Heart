<script lang="ts">
	import handstand from '@/assets/handstand.jpg';
</script>

<main class="relative w-[1024px] mx-auto flex p-4 border-2 gap-12 mt-32 min-h-vh">
	<div class="text-center border-2 w-[50%] flex flex-col gap-4 justify-center">
		<h1 class="text-h1 uppercase">Main Content</h1>
		<p class="text-p w-full">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, accusamus dolore. Perferendis
			voluptas mollitia, dolore inventore doloremque quo? Voluptatum, nulla! Alias aspernatur beatae
			totam fuga voluptas autem dolor rem nam.
		</p>
		<button class="self-start p-3 mt-8 bg-orange-50 w-[50%] mx-auto rounded-md font-bold"
			><a href="/skills"> Start Here</a>
		</button>
	</div>
	<div class="border-2 mx-auto">
		<img src={handstand} class="h-[30rem]" alt="handstand" />
	</div>
</main>
