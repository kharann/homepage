<script>
	import feather from 'feather-icons'
	import Link from '@components/link.svelte'

	const iconLinks = [
		{
			icon: feather.icons.github.toSvg(),
			link: 'https://github.com/kharann',
			text: "Github"
		},
		{
			icon: feather.icons.linkedin.toSvg(),
			link: 'https://linkedin.com/in/akvo',
			text: "Linkedin"
		},
		{
			icon: feather.icons.mail.toSvg(),
			link: 'mailto:hey@akvo.no',
			text: "Mail"
		}
	]
</script>

<footer class="mt-16 w-full">
	<div class="m-auto flex h-full w-full max-w-4xl flex-col items-center">
		<div class="grid w-max grid-cols-3 gap-5">
			{#each iconLinks as iconLink}
				<a class="text-highlight duration-300 hover:text-primary-7" href={iconLink.link} aria-hidden={true}
					>{@html iconLink.icon}<span class="sr-only">{iconLink.text}</span></a
				>
			{/each}
		</div>
		<div class="mb-4 mt-4 border-b-2 border-accent pb-2">
			<Link url="https://github.com/kharann/homepage" accent={false}
				>Website built by Anh-Kha Vo</Link
			>
		</div>
	</div>
</footer>
