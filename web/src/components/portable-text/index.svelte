<script lang="ts">
	import PortableText from '@portabletext/svelte';
	import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';
	import Link from './link.svelte';

	export let blocks: PortableTextBlocks;
</script>

<div class="content">
	<PortableText
		{blocks}
		serializers={{
			marks: {
				link: Link
			}
		}}
	/>
</div>

<style lang="scss" global>
	:local(.content) {
		ul {
			@apply list-disc list-inside ml-4 my-4 text-black dark:text-white;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			@apply font-bold text-primary-6 dark:text-secondary-dark mt-8 mb-4;
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
