<script context="module" lang="ts">
	import { fetchAllPosts, PreviewPost } from '../../api/all-post';
	import type { Load } from '@sveltejs/kit';
import { each } from 'svelte/internal';

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
	export let posts: PreviewPost[];
</script>

<section>
	{#each posts as post}
	
	{/each}
</section>
