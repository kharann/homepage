<script lang="ts">
	import { theme } from '@lib/shared/stores/theme';
	import ThemeIcon from './icons/theme-icon.svelte';

	const handleToggleTheme = () => {
		theme.set($theme === 'dark' ? 'light' : 'dark');
	};
</script>

<i
	class="flex cursor-pointer items-center justify-center text-gray-6 hover:text-gray-9 dark:text-gray-3 dark:hover:text-gray-1"
	on:click={handleToggleTheme}
>
	<ThemeIcon isDark={$theme == 'dark'} />
</i>
