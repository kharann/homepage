<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte'
	import Prism from 'prismjs'
	import 'prism-svelte'

	export let portableText: CustomBlockComponentProps<{
		code: string
		language: string
	}>
	const { code, language } = portableText.value
	const highlight = Prism.highlight(code, Prism.languages[language], language)
</script>

<svelte:head>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-gruvbox-dark.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<pre>
<code>{@html highlight}</code>
</pre>
