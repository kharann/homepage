import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

// https://astro.build/config
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './src/lib/remark-reading-time'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		svelte(),
		mdx({
			remarkPlugins: [remarkReadingTime]
		})
	]
})
