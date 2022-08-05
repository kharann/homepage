<script>
	import feather from 'feather-icons'
	import Link from '@components/link.svelte'

	const iconLinks = [
		{
			icon: feather.icons.github.toSvg(),
			link: 'https://github.com/kharann',
			text: 'Github'
		},
		{
			icon: feather.icons.linkedin.toSvg(),
			link: 'https://linkedin.com/in/akvo',
			text: 'Linkedin'
		},
		{
			icon: feather.icons.mail.toSvg(),
			link: 'mailto:hey@akvo.no',
			text: 'Mail'
		}
	]
</script>

<footer class="mt-16 w-full">
	<div class="m-auto flex h-full w-full max-w-4xl flex-col items-center">
		<div class="grid w-max grid-cols-3 gap-5">
			{#each iconLinks as iconLink}
				<Link url={iconLink.link}
					><i aria-hidden="true">{@html iconLink.icon}</i><span class="sr-only"
						>{iconLink.text}</span
					></Link
				>
			{/each}
		</div>
		<div class="mb-6 mt-4">
			<Link url="https://github.com/kharann/homepage" accent={false}
				><span class="border-b-2 border-accent py-2 px-1">Website built by Anh-Kha Vo</span></Link
			>
		</div>
	</div>
</footer>
