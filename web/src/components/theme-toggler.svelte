<script lang="ts">
	import { theme } from '@lib/shared/stores/theme';
	import ThemeIcon from './icons/theme-icon.svelte';

	const handleToggleTheme = () => {
		theme.set($theme === 'dark' ? 'light' : 'dark');
	};
</script>

<i
	class="flex items-center cursor-pointer text-gray-6 dark:text-gray-3 hover:text-gray-9 dark:hover:text-gray-1 justify-center"
	on:click={handleToggleTheme}
>
	<ThemeIcon isDark={$theme == 'dark'} />
</i>
