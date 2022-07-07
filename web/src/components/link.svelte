<script lang="ts">
	export let url: string
</script>

<a
	class="mt-4 inline-flex text-gray hover:text-primary dark:text-gray-3 dark:hover:text-primary-3"
	href={url}><slot /></a
>
