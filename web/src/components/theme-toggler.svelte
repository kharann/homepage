<script lang="ts">
	import { theme } from '@lib/shared/stores/theme'
	import ThemeIcon from './icons/theme-icon.svelte'

	const handleToggleTheme = () => {
		const isDark = $theme === 'dark'
		theme.set(isDark ? 'light' : 'dark')
		if (!isDark) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}
</script>

<i
	class="flex cursor-pointer items-center justify-center rounded-md p-2 text-gray-6 hover:bg-primary-0 hover:text-gray-9 dark:text-gray-3 dark:hover:bg-primary-8 dark:hover:text-gray-1"
	on:click={handleToggleTheme}
>
	<ThemeIcon isDark={$theme == 'dark'} />
</i>
