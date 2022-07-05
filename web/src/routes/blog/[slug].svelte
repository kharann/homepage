<script lang="ts">
	import type { BlogPost } from '@api/post-by-slug';
	import CustomPortableText from '@components/portable-text/index.svelte';
	import { DateTime } from 'luxon';
	export let post: BlogPost;
	const publishedDate = DateTime.fromISO(post._createdAt).toFormat('LLLL dd, yyyy');
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article class="m-auto flex w-full max-w-2xl flex-col">
	<h1 class="text-4xl font-bold text-primary-8 dark:text-secondary-dark">{post.title}</h1>
	<div class="mt-4 mb-16 flex flex-col justify-between sm:flex-row">
		<p>Anh-Kha Vo • {publishedDate}</p>
		<p>{post.estimatedReadingTime} min read</p>
	</div>
	<CustomPortableText blocks={post.content} />
</article>
