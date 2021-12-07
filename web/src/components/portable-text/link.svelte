<script>
	export let portableText;
</script>

<a
	href={portableText.marks.href}
	target="_blank"
	class="text-primary-5 hover:text-primary-8 dark:text-primary-3 dark:hover:text-primary-5"
>
	<slot />
</a>
