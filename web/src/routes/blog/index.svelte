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
	<h1 class="text-4xl text-primary-9 font-bold">Blog</h1>
	<p class="my-4">
		In 2021, I decided to begin sharing my thoughts in a more personal manner. Originally this
		website was supposed to be a knowledge base where I store things I've learned or snippets for
		myself in the future. However, I changed my mind and decided to share my stories, whether it's
		about using a new technology or a mistake I've learned from.
	</p>
	<p class="my-4">
		Currently, I've posted {posts.length} post, and I mostly write about technology, process, and careers.
	</p>
	<h2 class="text-3xl text-secondary dark:text-secondary-dark font-bold mt-4">All Posts</h2>
	{#each posts as post}
		<a sveltekit:prefetch href={`blog/${post.slug}`}>
			<PostListItem {post} />
		</a>
	{/each}
</section>
