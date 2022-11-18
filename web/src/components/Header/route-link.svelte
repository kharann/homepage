<script lang="ts">
	export let text: string
	export let href: string
	export let external: boolean = false
	export let isActive: boolean = false
</script>

<li
	class={`text-mauve-12 mr-1 rounded-md pl-2 pr-2 pt-1 pb-1 text-lg duration-300 hover:bg-mauve-3 ${
		isActive && 'font-bold text-brand-1'
	}`}
>
	<a {href} target={external ? '_blank' : undefined}>{text}</a>
</li>
