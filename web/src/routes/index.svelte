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

	const arrowRightIcon = feather.icons['arrow-right'].toSvg();
</script>

<section class="mt-4">
	<h1 class="text-3xl mb-2">
		Hei, I'm Anh-Kha Vo and on the web I go by <span
			class="text-primary dark:text-primary-3 font-black font-hack">Kharann 👋</span
		>
	</h1>
	<byline class="text-lg text-gray dark:text-gray-3">{role}</byline>
	<p class="mt-4">{description}</p>
</section>
<Section name="Latest posts">
	{#each posts as post}
		<a sveltekit:prefetch href={`blog/${post.slug}`}>
			<PostListItem {post} small={true} />
		</a>
	{/each}
	<a
		class="flex mt-4 text-gray dark:text-gray-3 hover:text-secondary dark:hover:text-secondary-dark"
		href="blog">Read all posts<i>{@html arrowRightIcon}</i></a
	>
</Section>
