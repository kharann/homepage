<script lang="ts">
	import { fly } from 'svelte/transition'

	interface Route {
		link: string
		text: string
	}

	export let routes: Route[]
	export let open: boolean
</script>

{#if open}
	<aside class="absolute h-screen w-full overflow-hidden">
		<nav
			class="bg-background dark:bg-primary-9 mt-20 flex h-full flex-col px-8 pb-2 transition duration-300 ease-in-out"
		>
			{#each routes as route, i}
				<a
					transition:fly={{ x: -25, delay: 75 * i }}
					class="border-primary-1 dark:border-primary-8 mt-4 border-b-2 pb-4 text-xl font-semibold transition-colors dark:text-white"
					href={route.link}
					on:click={() => (open = false)}>{route.text}</a
				>
			{/each}
		</nav>
	</aside>
{/if}
