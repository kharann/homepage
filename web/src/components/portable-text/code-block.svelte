<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';
	import Prism from 'prismjs';
	import 'prism-svelte';

	export let portableText: BlockProps<{
		code: string;
		language: string;
	}>;
	const { code, language } = portableText.block;
	const highlight = Prism.highlight(code, Prism.languages[language], 'svelte');
</script>

<svelte:head>
	<link
		href="https://cdn.jsdelivr.net/npm/prism-themes@1.4.0/themes/prism-shades-of-purple.css"
		rel="stylesheet"
	/>
</svelte:head>

<pre class={`language-${language} rounded-md`}>
    <code>
        {@html highlight}
    </code>
</pre>
