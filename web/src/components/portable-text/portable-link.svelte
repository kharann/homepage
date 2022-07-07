<script lang="ts">
	import Link from '@components/link.svelte'
	import type { MarkComponentProps } from '@portabletext/svelte'

	export let portableText: MarkComponentProps<{ href: string }>
</script>

<Link url={portableText.value.href}>
	<slot />
</Link>
