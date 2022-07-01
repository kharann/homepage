<script lang="ts">
	import { page } from '$app/stores';
	export let text: string;
	export let href: string;
	$: isActive = $page.routeId ? href.includes($page.routeId.split('/')[0]) : href === '/';
</script>

<li
	class={`hover:bg-primary-1 dark:text-gray-2 dark:hover:bg-gray-5 link ${
		isActive && 'font-extrabold dark:text-white'
	}`}
>
	<a sveltekit:prefetch {href}>{text}</a>
</li>

<style lang="postcss">
	.link {
		@apply mr-1 rounded-md pl-2 pr-2 pt-1 pb-1 text-lg  duration-300;
	}
</style>
