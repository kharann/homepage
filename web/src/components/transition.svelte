<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: URL;
</script>

{#key url}
	<div in:fade={{ duration: 250 }}>
		<slot />
	</div>
{/key}
