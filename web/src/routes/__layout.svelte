<script lang="ts">
	import '../app.postcss';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import { onMount } from 'svelte';
	import { theme } from '$lib/shared/stores/theme';

	onMount(() => {
		// Sets your theme based on prefers-color-scheme media query first time you're on the website.
		if (localStorage.getItem('theme') === 'system') {
			const preferedTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			theme.set(preferedTheme);
		}
	});
</script>

<svelte:head>
	<script>
		if (document) {
			const mode = localStorage.getItem('theme');
			const prefersDark =
				mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (mode === 'dark' || prefersDark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	</script>
</svelte:head>

<Header />
<main class="w-full max-w-3xl m-auto mt-8 px-8">
	<slot />
</main>
<Footer />
