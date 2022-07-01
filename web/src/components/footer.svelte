<script>
	import feather from 'feather-icons';

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
	];
</script>

<footer class="mt-8 w-full shadow">
	<div class="footer_container border-primary-2 dark:border-primary-8">
		<div class="content">
			<div class="grid w-max grid-cols-3 gap-5">
				{#each iconLinks as iconLink}
					<a
						class="text-primary duration-300 hover:text-primary-5 dark:text-primary-3 dark:hover:text-primary-4"
						href={iconLink.link}>{@html iconLink.icon}</a
					>
				{/each}
			</div>
			<div class="pt-4 text-center dark:text-white">
				© 2021-present Anh-Kha Vo. All rights preserved
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	.footer_container {
		@apply mr-4 ml-4 flex justify-center border-t-2 pt-6 pb-6;
	}
	.content {
		@apply m-auto flex h-full w-full max-w-4xl flex-col items-center;
	}
</style>
