<script lang="ts">
	import PortableText from '@portabletext/svelte';
	import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';
	import Heading from './heading.svelte';
	import Link from './link.svelte';
	import ListBullet from './list-bullet.svelte';

	export let blocks: PortableTextBlocks;
</script>

<PortableText
	{blocks}
	serializers={{
		blockStyles: {
			h1: Heading,
			h2: Heading,
			h3: Heading,
			h4: Heading,
			h5: Heading,
			h6: Heading,
			h7: Heading,
			h8: Heading,
			h9: Heading,
			list_bullet: ListBullet
		},
		marks: {
			link: Link
		}
	}}
/>
