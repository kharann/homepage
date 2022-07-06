<script lang="ts">
	export let name: string
</script>

<section class="mt-8">
	<h2
		class="pb-2 text-2xl font-bold text-primary-7 transition duration-300 dark:text-secondary-dark"
	>
		{name}
	</h2>
	<div class="mb-2 w-24 border-b-4 border-areo" />
	<slot />
</section>
