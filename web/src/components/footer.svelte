<script>
	import feather from 'feather-icons'
	import Link from '@components/link.svelte'

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

<footer class="mt-16 w-full">
	<div class="m-auto flex h-full w-full max-w-4xl flex-col items-center">
		<div class="grid w-max grid-cols-3 gap-5">
			{#each iconLinks as iconLink}
				<a class="text-highlight duration-300 hover:text-foreground-accent" href={iconLink.link}
					>{@html iconLink.icon}</a
				>
			{/each}
		</div>
		<div class="mb-4 border-b-2 border-accent pb-2 mt-4" >
			<Link url="https://github.com/kharann/homepage">Website built by Anh-Kha Vo</Link>
		</div>
	</div>
</footer>

