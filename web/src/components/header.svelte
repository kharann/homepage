<script>
	import Link from './link.svelte';
	import Logo from './logo.svelte';
	import feather from 'feather-icons';
	export let activePath;

	const routes = [
		{ link: '/', text: 'Home' },
		{ link: '/blog', text: 'Blog' },
		{ link: '/projects', text: 'Projects' },
		{ link: '/about', text: 'About' }
		// { link: '/resume', text: 'Resume' }
	];

	const moonIcon = feather.icons.moon.toSvg();
</script>

<nav class="header">
	<div class="header-items">
		<div class="flex">
			<a href="/" class="logo-container">
				<!-- logo -->
				<Logo />
			</a>
			<ul class="list-outside flex items-center">
				{#each routes as route}
					<Link href={route.link} text={route.text} isActive={route.link === activePath} />
				{/each}
			</ul>
		</div>
		<div class="flex items-center">
			<i>{@html moonIcon}</i>
		</div>
	</div>
</nav>

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
