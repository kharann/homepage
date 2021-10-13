<script context="module" lang="ts">
	import { fetchAllPosts, PreviewPost } from '../../api/all-post';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetchAllPosts(fetch);
		if (res.ok) {
			return {
				props: {
					posts: res.data
				}
			};
		}
		return {
			status: res.status,
			error: new Error('Could not perform query')
		};
	};
</script>

<script lang="ts">
	import PostListItem from '@components/post-list-item.svelte';

	export let posts: PreviewPost[];
</script>

<section>
	<h1 class="text-4xl text-accent font-bold">Blog</h1>
	<h2 class="text-3xl text-gray-dark font-bold mt-4">All Posts</h2>
	{#each posts as post}
		<a sveltekit:prefetch href={`blog/${post.slug}`}>
			<PostListItem {post} />
		</a>
	{/each}
</section>
