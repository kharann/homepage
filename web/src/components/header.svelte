<script lang="ts">
	import Link from './link.svelte';
	import Logo from './logo.svelte';
	import feather from 'feather-icons';
	import Dropdown from './dropdown.svelte';
	import Hamburger from './hamburger.svelte';
	export let activePath: string;

	const routes = [
		{ link: '/', text: 'Home' },
		{ link: '/blog', text: 'Blog' },
		{ link: '/projects', text: 'Projects' },
		{ link: '/about', text: 'About' }
		// { link: '/resume', text: 'Resume' }
	];
	const moonIcon = feather.icons.moon.toSvg({ height: '32px' });
	const sunIcon = feather.icons.sun.toSvg({ height: '32px' });
	let open: boolean = false;
</script>

<nav class="header">
	<div class="header-items">
		<div class="flex">
			<a href="/" class="logo-container">
				<!-- logo -->
				<Logo />
			</a>
			<ul class="hidden sm:flex list-outside items-center">
				{#each routes as route}
					<Link href={route.link} text={route.text} isActive={route.link === activePath} />
				{/each}
			</ul>
		</div>
		<div class="flex sm:hidden">
			<Hamburger bind:open />
		</div>
		<i class="hidden sm:flex">
			{@html moonIcon}
		</i>
	</div>
</nav>
<Dropdown bind:open {routes} />

<style lang="postcss">
	.header {
		@apply h-16 bg-white border-b-2 border-primary-light shadow w-full flex;
	}

	.logo-container {
		@apply no-underline flex items-center mr-6;
	}

	.header-items {
		@apply w-full max-w-4xl flex m-auto justify-between px-4;
	}
</style>
