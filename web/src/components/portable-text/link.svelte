<script>
	export let portableText;
</script>

<a href={portableText.marks.href} target="_blank" class="text-primary-4 hover:text-gray-dark">
	<slot />
</a>
