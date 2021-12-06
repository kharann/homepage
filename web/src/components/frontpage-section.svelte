<script lang="ts">
	export let name: string;
</script>

<section class="mt-8">
	<h2 class="text-2xl font-bold text-secondary dark:text-secondary-dark transition duration-300">
		{name}
	</h2>
	<slot />
</section>
