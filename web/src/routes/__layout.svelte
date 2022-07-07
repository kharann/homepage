<script lang="ts">
	import '../app.postcss'
	import Header from '../components/header'
	import Footer from '../components/footer.svelte'
	import { onMount } from 'svelte'
	import { theme } from '$lib/shared/stores/theme'
	import Transition from '@components/transition.svelte'
	import { page } from '$app/stores'

	onMount(() => {
		// Sets your theme based on prefers-color-scheme media query first time you're on the website.
		if (localStorage.getItem('theme') === 'system') {
			const preferedTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
			theme.set(preferedTheme)
		}
	})
</script>

<svelte:head>
	<script>
		if (document) {
			const mode = localStorage.getItem('theme')
			const prefersDark =
				mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches
			if (mode === 'dark' || prefersDark) {
				// document.documentElement.classList.add('dark')
			} else {
				// document.documentElement.classList.remove('dark')
			}
		}
	</script>
</svelte:head>

<Header />
<main class="m-auto mt-8 w-full max-w-3xl px-8">
	<Transition url={$page.url}>
		<slot />
	</Transition>
</main>
<Footer />
