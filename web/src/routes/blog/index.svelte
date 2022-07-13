<script lang="ts">
	import type { PreviewPost } from '@api/all-post'
	import LatestPosts from '@components/post/latest-posts.svelte'
	import Section from '@components/frontpage-section.svelte'

	export let posts: PreviewPost[]
</script>

<section>
	<h1 class="text-4xl font-bold text-primary-9">Blog</h1>
	<p class="my-4">
		In 2021, I decided to start writing more on my own time. After all, I love teaching and sharing
		my experiences. I mostly write about web development, cloud, team processes or tech careers.
	</p>
	<Section name="All posts.">
		<LatestPosts {posts} />
	</Section>
</section>
