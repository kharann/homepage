<script lang="ts">
	import { theme } from '@lib/shared/stores/theme';
	import feather from 'feather-icons';
	import ThemeIcon from './icons/theme-icon.svelte';

	const moonIcon = feather.icons.moon.toSvg({ height: '40px' });
	const sunIcon = feather.icons.sun.toSvg({ height: '40px' });

	const handleToggleTheme = () => {
		theme.set($theme === 'dark' ? 'light' : 'dark');
	};
</script>

<i
	class="flex items-center hover:bg-primary-1 dark:text-gray-3 dark:hover:bg-gray-5  justify-center"
	on:click={handleToggleTheme}
>
	<ThemeIcon isDark={$theme == 'dark'} />
</i>
