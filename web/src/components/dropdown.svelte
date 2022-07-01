<script lang="ts">
	import { fly } from 'svelte/transition';
	import ThemeToggler from './theme-toggler.svelte';

	interface Route {
		link: string;
		text: string;
	}

	export let routes: Route[];
	export let open: boolean;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
{#if open}
	<aside class="absolute h-screen w-full overflow-hidden">
		<nav
			class="mt-20 flex h-full flex-col bg-gray-0 px-8 pb-2 transition duration-300 ease-in-out dark:bg-primary-9"
		>
			{#each routes as route, i}
				<a
					transition:fly={{ x: -25, delay: 75 * i }}
					class="big-link"
					href={route.link}
					on:click={() => (open = false)}>{route.text}</a
				>
			{/each}
			<div class="mt-4 self-center pb-4" transition:fly={{ x: -25, delay: 75 * routes.length }}>
				<ThemeToggler />
			</div>
		</nav>
	</aside>
{/if}

<style lang="scss" global>
	:local(.big-link) {
		@apply mt-4 border-b-2 border-primary-1 pb-4 text-xl font-semibold dark:border-primary-8 dark:text-white;
	}
</style>
