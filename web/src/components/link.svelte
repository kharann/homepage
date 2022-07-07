<script lang="ts">
	export let url: string
</script>

<a
	class="inline-flex text-foreground transition-colors duration-300 hover:text-primary"
	href={url}><slot /></a
>
