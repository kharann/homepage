<script lang="ts">
	import { fly } from 'svelte/transition';

	interface Route {
		link: string;
		text: string;
	}

	export let routes: Route[];
	export let open: boolean;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
{#if open}
	<aside class="absolute w-full h-full overflow-hidden">
		<nav class="flex flex-col mt-20 px-8 bg-gray-light h-full">
			{#each routes as route, i}
				<a
					transition:fly={{ x: -15, delay: 50 * i }}
					class="big-link"
					href={route.link}
					on:click={() => (open = false)}>{route.text}</a
				>
			{/each}
		</nav>
	</aside>
{/if}

<style lang="postcss">
	.big-link {
		@apply text-xl font-semibold pb-4 mt-4 border-b-2 border-primary-1;
	}
</style>
