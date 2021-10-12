<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page }) => {
		let base_regex = /(\/\w+)\//;
		return {
			props: {
				activePath: page.path.replace(base_regex, '$1')
			}
		};
	};
</script>

<script>
	import '../app.postcss';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	export let activePath;
</script>

<Header {activePath} />
<main class="w-full max-w-3xl m-auto mt-12 px-4">
	<slot />
</main>
<Footer />
