<script lang="ts">
	import type {CustomBlockComponentProps} from '@portabletext/svelte'
	import Prism from 'prismjs'
	import 'prism-svelte'

	export let portableText: CustomBlockComponentProps<{
		code: string
		language: string
	}>
	const {code, language} = portableText.value
	const highlight = Prism.highlight(code, Prism.languages[language], 'svelte')
</script>

<svelte:head>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.5.0/prism-nord.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<pre class={`language-${language} rounded-md`}>
<code>{@html highlight}</code>
</pre>
