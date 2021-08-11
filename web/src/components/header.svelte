<script>
	import Link from './link.svelte';
</script>

<nav class="flex justify-between h-16 bg-white">
	<a href="/" class="no-underline flex items-center">
		<!-- logo -->
		<h1 class="font-logo text-primary m-0 text-2xl font-bold ml-4">
			~$<span class="relative whitespace-nowrap text-black">Anhkha Vo</span>
		</h1>
	</a>
	<ul class="text-black list-outside flex font-semibold">
		<Link href="/posts" text="Posts" />
		<Link href="/projects" text="Projects" />
		<Link href="/about" text="About" />
		<Link href="/resume" text="Resume" />
	</ul>
</nav>
