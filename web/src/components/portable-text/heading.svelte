<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';

	export let portableText: BlockProps;
	const block = portableText.block;
	const style = block.style;
</script>

{#if style === 'h2'}
	<h2 class="text-3xl "><slot /></h2>
{:else if style === 'h3'}
	<h3 class="text-2xl"><slot /></h3>
{:else if style === 'h4'}
	<h4 class="text-xl"><slot /></h4>
{:else if style === 'h5'}
	<h5 class="text-lg"><slot /></h5>
{:else}
	<h1 class="text-3xl font-black"><slot /></h1>
{/if}

<style lang="postcss">
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply font-bold text-accent mt-8 mb-4;
	}
</style>
