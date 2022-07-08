<script lang="ts">
	import type { PreviewPost } from '@api/all-post'
	import feather from 'feather-icons'
	import Section from '@components/frontpage-section.svelte'
	import LatestPosts from '@components/post/latest-posts.svelte'
	import Link from '@components/link.svelte'
	import SEO from '@components/seo/index.svelte'
	import PortableText from '@components/portable-text/index.svelte'
	import type { InputValue } from '@portabletext/svelte/ptTypes'
	import Timeline from '@components/timeline'
	import type { Experience } from '@api/all-experience'
	import Chips from '@components/chips/chips.svelte'

	export let posts: PreviewPost[]
	export let role: string
	export let aboutMeContent: InputValue
	export let experiences: Experience[]

	const arrowRightIcon = feather.icons['arrow-right'].toSvg({ height: '24px' })
</script>

<SEO title="Anhkha Vo" metaDescription="Personal portfolio to Anhkha Vo" />

<section class="mt-4">
	<h1 class="mb-2 text-4xl font-bold text-foreground-accent">
		Hi, my name is
		<span class="font-hack font-bold text-primary dark:text-primary-3">Anhkha 👋</span>
	</h1>
	<byline class="text-lg text-primary-9 dark:text-gray-200">{role}</byline>
</section>
<Section name="About me."><PortableText blocks={aboutMeContent} /></Section>
<Section name="Latest posts.">
	<LatestPosts {posts} />
	<div class="mt-4">
		<Link url="blog" accent={false}>Read all posts<i>{@html arrowRightIcon}</i></Link>
	</div>
</Section>

<Section name="Experience.">
	<Chips />
	<Timeline {experiences} />
</Section>
