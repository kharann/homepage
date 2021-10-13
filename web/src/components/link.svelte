<script lang="ts">
	export let text: string;
	export let href: string;
	export let isActive: boolean;
</script>

<li class={`link ${isActive && 'font-extrabold'}`}>
	<a sveltekit:prefetch {href}>{text}</a>
</li>

<style lang="postcss">
	.link {
		@apply mr-1 pl-2 pr-2 pt-1 pb-1 text-lg rounded-md hover:bg-primary-1 duration-300;
	}
</style>
