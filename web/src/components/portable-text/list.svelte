<script lang="ts">
	import type { ListComponentProps } from '@portabletext/svelte'
	export let portableText: ListComponentProps
	$: ({ value } = portableText)
	$: ({ listItem } = value)
</script>

{#if listItem === 'number'}
	<ol class="list-decimal dark:text-white"><slot /></ol>
{:else}
	<ul class="list-disc dark:text-white"><slot /></ul>
{/if}

<style lang="postcss">
	ol,
	ul {
		@apply my-6 ml-10 list-outside text-black;
	}
</style>
