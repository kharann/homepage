<script lang="ts">
	export let title: string;
	export let reading_time: string;
	export let tags: string[];
</script>

<article>
	<h1>{title}</h1>
	{#each tags as tag}
		<p>{tag}</p>
	{/each}
</article>
