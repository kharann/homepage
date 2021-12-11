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
	<aside class="absolute w-full h-screen overflow-hidden">
		<nav
			class="flex flex-col mt-20 pb-2 px-8 bg-gray-0 dark:bg-primary-9 h-full transition duration-300 ease-in-out"
		>
			{#each routes as route, i}
				<a
					transition:fly={{ x: -25, delay: 75 * i }}
					class="big-link"
					href={route.link}
					on:click={() => (open = false)}>{route.text}</a
				>
			{/each}
			<div class="pb-4 mt-4 self-center" transition:fly={{ x: -25, delay: 75 * routes.length }}>
				<ThemeToggler />
			</div>
		</nav>
	</aside>
{/if}

<style lang="scss" global>
	:local(.big-link) {
		@apply text-xl font-semibold pb-4 mt-4 border-b-2 border-primary-1 dark:border-primary-8 dark:text-white;
	}
</style>
