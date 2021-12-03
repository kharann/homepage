<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page }) => {
		let base_regex = /(\/\w+)\//;
		return {
			props: {
				// Get the active path for highlighting
				activePath: page.path.replace(base_regex, '$1')
			}
		};
	};
</script>

<script lang="ts">
	import '../app.postcss';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import { onMount } from 'svelte';
	import { theme } from '@lib/shared/stores/theme';
	import { browser } from '$app/env';
	export let activePath: string;

	onMount(() => {
		// Sets your theme based on prefers-color-scheme media query first time you're on the website.
		if (localStorage.getItem('theme') === 'system') {
			const preferedTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			theme.set(preferedTheme);
		}
	});
	$: if (browser) document.body.classList.toggle('dark', $theme === 'dark');
</script>

<Header {activePath} />
<main class="w-full max-w-3xl m-auto mt-8 px-8">
	<slot />
</main>
<Footer />
