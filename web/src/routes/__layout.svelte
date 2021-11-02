<script context="module">
	export async function load({ page }) {
		let base_regex = /(\/\w+)\//;
		return {
			props: {
				activePath: page.path.replace(base_regex, '$1')
			}
		};
	}
</script>

<script>
	import '../app.postcss';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	export let activePath;
</script>

<Header {activePath} />
<main class="w-full max-w-4xl h-full m-auto">
	<slot />
</main>
<Footer />
