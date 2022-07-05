<script lang="ts">
	import PortableText from '@portabletext/svelte';
	import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';
	import CodeBlock from './code-block.svelte';
	import Link from './link.svelte';

	export let blocks: PortableTextBlocks;
</script>

<div class="content">
	<PortableText
		{blocks}
		serializers={{
			types: {
				code_block: CodeBlock
			},
			marks: {
				link: Link
			}
		}}
	/>
</div>

<style lang="scss" global>
	:local(.content) {
		ul,
		ol {
			@apply my-6 ml-10 list-outside text-black dark:text-white;
		}

		ol {
			@apply list-decimal;
		}

		ul {
			@apply list-disc;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			@apply mt-8 mb-4 font-bold text-primary-8 dark:text-secondary-dark;
		}

		h2 {
			@apply text-3xl;
		}
		h3 {
			@apply text-2xl;
		}
		h4 {
			@apply text-xl;
		}
		h5 {
			@apply text-lg;
		}

		p {
			@apply my-4;
		}
	}
</style>
