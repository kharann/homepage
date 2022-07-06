<script lang="ts">
	import {PortableText} from '@portabletext/svelte'
	import type {InputValue} from '@portabletext/svelte/ptTypes'
	import CodeBlock from './code-block.svelte'
	import Link from './link.svelte'
	import List from './list.svelte'

	export let blocks: InputValue
</script>

<div class="content">
	<PortableText
		value={blocks}
		components={{
			types: {
				code_block: CodeBlock
			},
			marks: {
				link: Link
			},
			list: List
		}}
	/>
</div>

<style lang="scss" global>
	:local(.content) {
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
