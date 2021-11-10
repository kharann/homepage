<script context="module">
	import groq from 'groq';

	const query = groq`
        *[_type == "posts" && slug.current == "my-first-post" && !(_id in path("drafts.**"))][0] {
             _createdAt,
             _updatedAt,
             title,
             slug,
             tags,
             post_content
        }`;
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		const res = await fetch('http://localhost:3333', query);
		return {
			props: {
				slug: page.params.slug
			}
		};
	}
</script>

<script lang="ts">
	export let slug: string;
</script>

<div>
	Hello {slug}
</div>
