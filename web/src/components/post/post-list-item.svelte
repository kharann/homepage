<script lang="ts">
	import type { PreviewPost } from '@api/all-post'
	import { DateTime } from 'luxon'
	export let post: PreviewPost

	const { estimatedReadingTime, title, _createdAt } = post
	const publishedAt = DateTime.fromISO(_createdAt).toFormat('LLL dd, yyyy')
</script>

<article class="text-foreground hover:text-highlight">
	<h3 class="mt-4 text-xl text-inherit">{title}</h3>
	<p class="flex items-center justify-between">
		<span class="text-gray dark:text-gray-300">{publishedAt}</span>
		<span class="text-gray dark:text-gray-300">{estimatedReadingTime} min read</span>
	</p>
</article>
