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

<nav class="header bg-white dark:bg-primary-9 border-primary-2 dark:border-black ">
	<div class="header-items">
		<div class="flex">
			<a href="/" class="logo-container">
				<!-- logo -->
				<Logo />
			</a>
			<ul class="hidden sm:flex list-outside items-center">
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
		@apply h-16 border-b-2  shadow w-full flex;
	}

	.logo-container {
		@apply no-underline flex items-center mr-6;
	}

	.header-items {
		@apply w-full max-w-4xl flex m-auto justify-between px-4;
	}
</style>
