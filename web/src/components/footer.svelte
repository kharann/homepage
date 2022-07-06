<script>
	import feather from 'feather-icons'

	const iconLinks = [
		{
			icon: feather.icons.github.toSvg(),
			link: 'https://github.com/kharann'
		},
		{
			icon: feather.icons.linkedin.toSvg(),
			link: 'https://linkedin.com/in/akvo'
		},
		{
			icon: feather.icons.mail.toSvg(),
			link: 'mailto:hey@akvo.no'
		}
	]
</script>

<footer class="mt-8 w-full">
	<div class="content">
		<div class="grid w-max grid-cols-3 gap-5">
			{#each iconLinks as iconLink}
				<a
					class="text-primary duration-300 hover:text-primary-5 dark:text-primary-3 dark:hover:text-primary-4"
					href={iconLink.link}>{@html iconLink.icon}</a
				>
			{/each}
		</div>
		<a
			href="https://github.com/kharann/homepage"
			target="_blank"
			class="mb-2 mt-4 border-b-2 border-areo pb-1 text-center transition-colors hover:text-primary dark:text-white"
			>Website built by Anh-Kha Vo</a
		>
	</div>
</footer>

<style lang="postcss">
	.content {
		@apply m-auto flex h-full w-full max-w-4xl flex-col items-center;
	}
</style>
