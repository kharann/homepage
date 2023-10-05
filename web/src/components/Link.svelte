<script lang="ts">
	import clsx from 'clsx'

	export let url: string
	export let accent: boolean = true
	export let className: string | undefined = undefined
	export let arialabel: string | undefined = undefined
</script>

<a
	class={clsx(
		'inline-flex transition-colors duration-300 hover:text-brand-9',
		accent && 'text-brand-6',
		className
	)}
	aria-label={arialabel}
	href={url}
	target="_blank"
	rel="noreferrer"><slot /></a
>

<style>
	a {
		position: relative;
		z-index: 1;
		padding: 0.65em;
		margin: -0.65em;
	}
</style>
