<script lang="ts">
	export let text: string;
	export let href: string;
	export let isActive: boolean;
	const style = isActive ? 'link font-extrabold' : 'link';
</script>

<li class={style}>
	<a {href}>{text}</a>
</li>

<style lang="scss">
	.link {
		@apply mr-1 pl-2 pr-2 pt-1 pb-1 text-lg rounded-md hover:bg-primary-100 duration-300;
	}
</style>
