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

<footer class="mt-8 shadow w-full">
	<div class="border-primary-2 dark:border-gray-5 footer_container">
		<div class="content">
			<div class="grid grid-cols-3 w-max gap-5">
				{#each iconLinks as iconLink}
					<a
						class="text-primary hover:text-primary-5 dark:text-primary-3 dark:hover:text-primary-4 duration-300"
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
		@apply pt-6 pb-6 border-t-2 flex justify-center mr-4 ml-4;
	}
	.content {
		@apply max-w-4xl w-full m-auto h-full flex flex-col items-center;
	}
</style>
