<script lang="ts">
	import clsx from 'clsx'

	export let url: string
	export let accent: boolean = true
	export let className: string | undefined = undefined
</script>

<a
	class={clsx(
		'inline-flex transition-colors duration-300 hover:text-highlight-hover',
		accent && 'text-highlight',
		className
	)}
	href={url}
	target="_blank"
	rel="noreferrer"><slot /></a
>

<style>
	a {
		position: relative;
		z-index: 1;
		padding: 0.5em;
		margin: -0.5em;
	}
</style>
