<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte'

	export let portableText: MarkComponentProps<{ href: string }>
	console.log(portableText)
</script>

<a
	href={portableText.value.href}
	target="_blank"
	class="text-primary-5 hover:text-primary-8 dark:text-primary-3 dark:hover:text-primary-5"
>
	<slot />
</a>
