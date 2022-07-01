<script lang="ts">
	import Link from './link.svelte';
	import Logo from './logo.svelte';
	import Dropdown from './dropdown.svelte';
	import Hamburger from './hamburger.svelte';
	import ThemeToggler from './theme-toggler.svelte';

	const routes = [
		{ link: '/', text: 'Home' },
		{ link: '/blog', text: 'Blog' },
		{ link: '/projects', text: 'Projects' },
		{ link: '/about', text: 'About' }
		// { link: '/resume', text: 'Resume' }
	];
	let open: boolean = false;
</script>

<nav class="header border-primary-2 bg-white dark:border-black dark:bg-primary-9 ">
	<div class="header-items">
		<div class="flex">
			<a href="/" class="logo-container">
				<!-- logo -->
				<Logo />
			</a>
			<ul class="hidden list-outside items-center sm:flex">
				{#each routes as route}
					<Link href={route.link} text={route.text} />
				{/each}
			</ul>
		</div>
		<div class="flex sm:hidden">
			<Hamburger bind:open />
		</div>
		<ThemeToggler />
	</div>
</nav>
<Dropdown bind:open {routes} />

<style lang="postcss">
	.header {
		@apply flex h-16  w-full border-b-2 shadow;
	}

	.logo-container {
		@apply mr-6 flex items-center no-underline;
	}

	.header-items {
		@apply m-auto flex w-full max-w-4xl justify-between px-4;
	}
</style>
