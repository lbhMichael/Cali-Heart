<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="mx-auto w-5/6 min-h-svh">
	<Navbar />
	<slot />
</div>
