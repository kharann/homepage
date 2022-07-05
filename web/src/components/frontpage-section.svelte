<script lang="ts">
	export let name: string;
</script>

<section class="mt-8">
	<h2 class="text-2xl font-bold text-secondary transition duration-300 dark:text-secondary-dark">
		{name}
	</h2>
	<slot />
</section>
