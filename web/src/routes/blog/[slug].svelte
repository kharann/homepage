<script context="module" lang="ts">
	import { BlogPost, fetchPostBySlug } from '../../api/post-by-slug';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, page }) => {
		const res = await fetchPostBySlug(fetch, { slug: page.params.slug });
		if (res.ok) {
			return {
				props: {
					post: res.data
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
	import CustomPortableText from '@components/portable-text/index.svelte';
	import { DateTime } from 'luxon';
	export let post: BlogPost;
	const publishedDate = DateTime.fromISO(post._createdAt).toFormat('LLLL dd, yyyy');
</script>

<article class="max-w-2xl w-full m-auto flex flex-col">
	<h1 class="text-4xl font-bold text-primary-6 dark:text-secondary-dark">{post.title}</h1>
	<div class="flex justify-between mt-4 mb-16 sm:flex-row flex-col">
		<p>Anh-Kha Vo • {publishedDate}</p>
		<p>{post.estimatedReadingTime} min read</p>
	</div>
	<CustomPortableText blocks={post.content} />
</article>
