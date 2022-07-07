<script lang="ts">
	import type { PreviewPost } from '@api/all-post'
	import LatestPosts from '@components/post/latest-posts.svelte'
	import Section from '@components/frontpage-section.svelte'

	export let posts: PreviewPost[]
</script>

<section>
	<h1 class="text-4xl font-bold text-primary-9">Blog</h1>
	<p class="my-4">
		In 2021, I decided to begin sharing my thoughts in a more personal manner. Originally this
		website was supposed to be a knowledge base where I store things I've learned or snippets for
		myself in the future. However, I changed my mind and decided to share my stories, whether it's
		about using a new technology or a mistake I've learned from.
	</p>
	<p class="my-4">
		Currently, I've posted {posts.length} post, and I mostly write about technology, process, and careers.
	</p>
	<Section name="All posts">
		<LatestPosts {posts} />
	</Section>
</section>
