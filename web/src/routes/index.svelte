<script context="module">
	import { fetchIntroAndPosts } from '@api/frontpage';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const load = async ({ fetch }) => {
		const res = await fetchIntroAndPosts(fetch);
		if (res.ok) {
			return {
				props: {
					posts: res.data.latest_posts,
					role: res.data.introduction.role,
					description: res.data.introduction.description
				}
			};
		}
	};
</script>

<script lang="ts">
	import type { PreviewPost } from '@api/all-post';
	import feather from 'feather-icons';
	import PostListItem from '@components/post-list-item.svelte';

	export let posts: PreviewPost[];
	export let role: string;
	export let description: string;

	const arrowRightIcon = feather.icons['arrow-right'].toSvg();
</script>

<section class="mt-4">
	<h1 class="text-3xl mb-2">
		Hei, I'm Anh-Kha Vo and on the web I go by <span class="name">Kharann 👋</span>
	</h1>
	<byline class="text-lg text-gray dark:text-gray-2">{role}</byline>
	<p class="mt-4">{description}</p>
</section>
<section class="mt-8">
	<h2 class="text-2xl font-bold text-secondary dark:text-secondary-dark">Latest posts</h2>
	{#each posts as post}
		<a sveltekit:prefetch href={`blog/${post.slug}`}>
			<PostListItem {post} small={true} />
		</a>
	{/each}
	<a class="flex mt-4 text-gray hover:text-secondary dark:hover:text-secondary-dark" href="blog"
		>Read all posts<i>{@html arrowRightIcon}</i></a
	>
</section>

<style lang="postcss">
	.name {
		@apply text-primary font-black font-hack;
	}
</style>
