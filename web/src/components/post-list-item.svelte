<script lang="ts">
	import type { PreviewPost } from '@api/all-post';
	import { DateTime } from 'luxon';
	export let post: PreviewPost;
	export let small: boolean | undefined;

	const { estimatedReadingTime, title, _createdAt } = post;
	const publishedAt = DateTime.fromISO(_createdAt).toFormat('LLL dd, yyyy');
</script>

<article>
	<h3 class={`${small ? 'text-xl' : 'text-2xl'} text-gray-dark mt-4`}>{title}</h3>
	<p class="flex justify-between items-center">
		<span class="text-gray-dark">{publishedAt}</span>
		<span class="text-gray">{estimatedReadingTime} min read</span>
	</p>
</article>
