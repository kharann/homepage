<script lang="ts">
	export let text: string;
	export let href: string;
	export let isActive: boolean;
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
		@apply mr-1 pl-2 pr-2 pt-1 pb-1 text-lg rounded-md  duration-300;
	}
</style>
