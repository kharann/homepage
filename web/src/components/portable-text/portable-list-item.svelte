<script lang="ts">
	import type { ListItemComponentProps } from '@portabletext/svelte'
	export let portableText: ListItemComponentProps
	$: ({ value } = portableText)
	$: ({ listItem } = value)
</script>

{#if listItem === 'bullet'}
	<li><slot /></li>
{:else}
	<li><slot /></li>
{/if}
