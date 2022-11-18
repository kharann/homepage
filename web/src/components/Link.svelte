<script lang="ts">
	export let url: string
	export let accent: boolean = true
</script>

<a
	class={`inline-flex transition-colors duration-300 hover:text-highlight-hover ${
		accent && 'text-highlight '
	}`}
	href={url}><slot /></a
>

<style>
	a {
		position: relative;
		z-index: 1;
		padding: 0.5em;
		margin: -0.5em;
	}
</style>
