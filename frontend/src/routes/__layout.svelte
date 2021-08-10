<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.postcss';
</script>

<Header />
<main>
	<slot />
</main>
<footer>
	<p>Nice footer nerd</p>
</footer>
