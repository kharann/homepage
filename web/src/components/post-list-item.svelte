<script lang="ts">
	import type { PreviewPost } from '@api/all-post';
	import { DateTime } from 'luxon';
	export let post: PreviewPost;
	export let small: boolean | undefined = undefined;

	const { estimatedReadingTime, title, _createdAt } = post;
	const publishedAt = DateTime.fromISO(_createdAt).toFormat('LLL dd, yyyy');
</script>

<article class="hover:text-secondary dark:hover:text-secondary-dark text-black dark:text-white">
	<h3 class={`${small ? 'text-xl' : 'text-2xl'}  mt-4`}>{title}</h3>
	<p class="flex justify-between items-center">
		<span class="text-gray dark:text-gray-3">{publishedAt}</span>
		<span class="text-gray dark:text-gray-3">{estimatedReadingTime} min read</span>
	</p>
</article>

<style lang="postcss">
	article > h3 {
		color: inherit;
	}
</style>
