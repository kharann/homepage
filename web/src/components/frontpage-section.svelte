<script lang="ts">
	import Divider from './divider.svelte'

	export let name: string
</script>

<section class="mt-8">
	<h2 class="pb-2 text-2xl font-bold text-foreground-accent transition duration-300">
		{name}
	</h2>
	<Divider />
	<slot />
</section>
