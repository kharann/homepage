<script lang="ts">
	import type { PreviewPost } from '@api/all-post'
	import feather from 'feather-icons'
	import Section from '@components/frontpage-section.svelte'
	import LatestPosts from '@components/post/latest-posts.svelte'
	import Link from '@components/link.svelte'
	import SEO from "@components/seo/index.svelte"

	export let posts: PreviewPost[]
	export let role: string
	export let description: string

	const arrowRightIcon = feather.icons['arrow-right'].toSvg({ height: '24px' })
</script>

<SEO title="Anhkha Vo" metaDescription="Personal portfolio to Anhkha Vo"/>

<section class="mt-4">
	<h1 class="mb-2 text-4xl font-bold text-primary-7">
		Hi, my name is
		<span class="font-hack font-bold text-primary dark:text-primary-3">Anhkha 👋</span>
	</h1>
	<byline class="text-lg text-primary-8 dark:text-gray-2">{role}</byline>
</section>
<Section name="About me">{description}</Section>
<Section name="Latest posts">
	<LatestPosts {posts} />
	<Link url="blog">Read all posts<i>{@html arrowRightIcon}</i></Link>
</Section>
