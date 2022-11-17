<script lang="ts">
	import type { ListComponentProps } from '@portabletext/svelte'
	export let portableText: ListComponentProps
	$: ({ value } = portableText)
	$: ({ listItem } = value)
</script>

{#if listItem === 'number'}
	<ol class="list-outside list-decimal"><slot /></ol>
{:else}
	<ul class="list-outside list-disc"><slot /></ul>
{/if}
