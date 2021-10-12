<script lang="ts">
	import type { PreviewPost } from '@api/all-post';
	import { DateTime } from 'luxon';
	export let post: PreviewPost;

	const { estimatedReadingTime, title, _createdAt } = post;
	const publishedAt = DateTime.fromISO(_createdAt).toFormat('LLL dd, yyyy');
</script>

<article>
	<div class="flex justify-between items-center mt-4">
		<h3 class="text-2xl text-gray-dark">{title}</h3>
		<span class="h-full text-gray-dark">{publishedAt}</span>
	</div>
	<p class="text-gray">{estimatedReadingTime} min read</p>
</article>
