<script lang="ts">
	import type { BlogPost } from '@api/post-by-slug'
	import Divider from '@components/divider.svelte'
	import CustomPortableText from '@components/portable-text/index.svelte'
	import { DateTime } from 'luxon'
	export let post: BlogPost
	const publishedDate = DateTime.fromISO(post._createdAt).toFormat('LLLL dd, yyyy')
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article class="m-auto flex w-full max-w-2xl flex-col">
	<h1 class="mb-4 text-4xl font-bold text-foreground-accent">{post.title}</h1>
	<Divider />
	<div class="mt-2 mb-16 flex flex-col justify-between sm:flex-row">
		<p>Anh-Kha Vo • {publishedDate}</p>
		<p>{post.estimatedReadingTime} min read</p>
	</div>
	<CustomPortableText blocks={post.content} />
</article>
