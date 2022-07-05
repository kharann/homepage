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
	import Section from '@components/frontpage-section.svelte';

	export let posts: PreviewPost[];
	export let role: string;
	export let description: string;

	const arrowRightIcon = feather.icons['arrow-right'].toSvg({ height: '24px' });
</script>

<section class="mt-4">
	<h1 class="mb-2 text-4xl">
		Hi, my name is <span class="font-hack font-black text-primary dark:text-primary-3"
			>Anhkha Vo</span
		> 👋
	</h1>
	<byline class="text-lg text-primary-8 dark:text-gray-2">{role}</byline>
	<p class="mt-4">{description}</p>
</section>
<Section name="About me">I enjoy working in teams</Section>
<Section name="Latest posts">
	{#each posts as post}
		<a sveltekit:prefetch href={`blog/${post.slug}`}>
			<PostListItem {post} small={true} />
		</a>
	{/each}
	<a
		class="mt-4 flex items-center text-gray hover:text-primary dark:text-gray-3 dark:hover:text-primary-3"
		href="blog">Read all posts<i>{@html arrowRightIcon}</i></a
	>
</Section>
