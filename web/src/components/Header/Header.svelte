<script lang="ts">
	import RouteLink from './route-link.svelte'
	import Logo from './logo.svelte'
	import Dropdown from './dropdown.svelte'
	import Hamburger from './hamburger.svelte'

	const routes = [
		{ link: '/', text: 'Home' },
		{ link: '/blog', text: 'Blog' },
		{
			link: 'https://cdn.sanity.io/files/r4l4xmqo/production/88fe6b28879c1d78e9a8f4a8044ed55e7c87c666.pdf',
			text: 'Resume'
		}
	]

	let open: boolean = false
	export let url: string
</script>

<nav class="flex h-16 w-full">
	<div class="m-auto flex w-full max-w-4xl justify-between px-4">
		<a href="/" class="mr-6 flex items-center no-underline">
			<!-- logo -->
			<Logo />
		</a>
		<div class="flex">
			<ul class="hidden list-outside items-center sm:flex">
				{#each routes as route}
					<RouteLink href={route.link} text={route.text} isActive={route.link === url} />
				{/each}
				<!-- <ThemeToggler /> -->
			</ul>
		</div>
		<div class="flex sm:hidden">
			<Hamburger bind:open />
		</div>
	</div>
</nav>
<Dropdown bind:open {routes} />
