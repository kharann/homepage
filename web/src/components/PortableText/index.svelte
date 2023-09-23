<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import type { ComponentProps } from 'svelte'
	import CodeBlock from './code-block.svelte'
	import Link from './portable-link.svelte'
	import List from './list.svelte'
	import ListItem from './portable-list-item.svelte'

	export let blocks: ComponentProps<PortableText>["value"] 
</script>

<div class="prose max-w-[75ch]">
	<PortableText
		value={blocks}
		components={{
			types: {
				code_block: CodeBlock
			},
			marks: {
				link: Link
			},
			list: {
				bullet: List
			},
			listItem: {
				bullet: ListItem,
				normal: ListItem
			}
		}}
	/>
</div>
