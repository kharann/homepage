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
	export let activePath: string;
</script>

<Header {activePath} />
<main class="w-full max-w-3xl m-auto mt-8 px-8">
	<slot />
</main>
<Footer />
