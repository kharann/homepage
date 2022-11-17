<script lang="ts">
	import { page } from '$app/stores'
	export let text: string
	export let href: string
	export let external: boolean = false
	$: isActive = $page.routeId ? href.includes($page.routeId.split('/')[0]) : href === '/'
</script>

<li
	class={`hover:bg-primary-0 dark:text-gray-100 dark:hover:bg-primary-8 link ${
		isActive && 'font-bold dark:text-white'
	}`}
>
	<a sveltekit:prefetch {href} target={external ? '_blank' : undefined}>{text}</a>
</li>

<style lang="postcss">
	.link {
		@apply mr-1 rounded-md pl-2 pr-2 pt-1 pb-1 text-lg  duration-300;
	}
</style>
