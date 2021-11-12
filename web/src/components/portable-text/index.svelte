<script lang="ts">
	import PortableText from '@portabletext/svelte';
	import type { PortableTextSlots } from '@portabletext/svelte/PortableText.svelte';
	import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';
	import Heading from './heading.svelte';

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
			h9: Heading
		}
	}}
/>
