<script lang="ts">
	import type { ListItemComponentProps } from '@portabletext/svelte'
	export let portableText: ListItemComponentProps
	$: ({ value } = portableText)
	$: ({ listItem } = value)
</script>

<li><slot /></li>
