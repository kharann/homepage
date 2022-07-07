<script lang="ts">
	import RouteLink from './route-link.svelte'
	import Logo from './logo.svelte'
	import Dropdown from './dropdown.svelte'
	import Hamburger from './hamburger.svelte'
	import ThemeToggler from './theme-toggler.svelte'

	const routes = [
		{ link: '/', text: 'Home' },
		{ link: '/blog', text: 'Blog' },
		{
			link: 'https://cdn.sanity.io/files/r4l4xmqo/production/83c578177d0e1d2bbbd07b7a255bf61159fd5887.pdf',
			text: 'Resume'
		}
		// { link: '/about', text: 'About' }
		// { link: '/resume', text: 'Resume' }
	]

	let open: boolean = false
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
					<RouteLink href={route.link} text={route.text} external={route.text === 'Resume'} />
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
