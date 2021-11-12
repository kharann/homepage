<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';

	export let portableText: BlockProps;
	const block = portableText.block;
	const style = block.style;
</script>

{#if style === 'h2'}
	<h2 class="text-2xl font-bold text-accent mt-8 mb-4"><slot /></h2>
{:else if style === 'h3'}
	<h3 class="text-xl font-bold text-accent mt-8 mb-4"><slot /></h3>
{:else if style === 'h4'}
	<h4 class="text-lg font-bold text-accent mt-8 mb-4"><slot /></h4>
{:else if style === 'h5'}
	<h5 class="text-lg text-gray-600"><slot /></h5>
{:else if style === 'h6'}
	<h6 class="text-lg text-gray-600"><slot /></h6>
{:else if style === 'h7'}
	<h7 class="text-lg text-gray-600"><slot /></h7>
{:else if style === 'h8'}
	<h8 class="text-lg text-gray-600"><slot /></h8>
{:else if style === 'h9'}
	<h9 class="text-lg text-gray-600"><slot /></h9>
{:else}
	<h1 class="text-3xl font-black"><slot /></h1>
{/if}
