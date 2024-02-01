<script>
	import handstand from '@/assets/handstand.jpg';
</script>

<main class="relative flex p-4 justify-between mt-32 min-h-vh">
	<div class="basis-1/2 my-auto flex flex-col gap-4">
		<h1 class="text-h1">Main Content</h1>
		<p class="text-p w-full">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, accusamus dolore. Perferendis
			voluptas mollitia, dolore inventore doloremque quo? Voluptatum, nulla! Alias aspernatur beatae
			totam fuga voluptas autem dolor rem nam.
		</p>
		<button class="self-start p-4 bg-orange-50 font-bold"
			><a href="/skills"> Start Here</a>
		</button>
	</div>
	<div class="justify-center md:basis-1/2 sm:none flex items-end">
		<img src={handstand} class="h-[30rem] aspect-1" alt="handstand" />
	</div>
</main>
