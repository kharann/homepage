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
	<h1 class="text-4xl text-gray-5 font-bold">Blog</h1>
	<p class="my-4">
		In 2021, I made the decision to begin writing. It was always on my mind because I enjoyed
		sharing my knowledge and mistakes with others. I primarily write about technology, whether it's
		about career or new technologies that I've used.
	</p>
	<h2 class="text-3xl text-secondary dark:text-secondary-dark font-bold mt-4">All Posts</h2>
	{#each posts as post}
		<a sveltekit:prefetch href={`blog/${post.slug}`}>
			<PostListItem {post} />
		</a>
	{/each}
</section>
