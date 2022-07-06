<script lang="ts">
	import type { PreviewPost } from '@api/all-post'
	import PostListItem from '@components/post/post-list-item.svelte'
	import { page } from '$app/stores'
	import { fly } from 'svelte/transition'

	export let posts: PreviewPost[]

	$: url = $page.url
</script>

{#key url}
	<ul in:fly={{ x: 50, delay: 100 }}>
		{#each posts as post, i}
			<a sveltekit:prefetch href={`blog/${post.slug}`}>
				<PostListItem {post} small={true} />
			</a>
		{/each}
	</ul>
{/key}
