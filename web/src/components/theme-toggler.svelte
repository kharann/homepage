<script>
	import { theme } from '@lib/shared/stores/theme';

	import feather from 'feather-icons';
	const moonIcon = feather.icons.moon.toSvg({ height: '40px' });
	const sunIcon = feather.icons.sun.toSvg({ height: '40px' });

	const handleToggleTheme = () => {
		theme.set($theme === 'dark' ? 'light' : 'dark');
	};

	$: currentIcon = $theme === 'dark' ? sunIcon : moonIcon;
</script>

<svelte:body class={'dark'} />

<i
	class="hidden sm:flex hover:bg-primary-1 dark:text-gray-3 dark:hover:bg-gray-5 items-center rounded-md w-10 justify-center"
	on:click={handleToggleTheme}
>
	{@html currentIcon}
</i>
