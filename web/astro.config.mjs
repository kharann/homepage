import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

// https://astro.build/config
import image from '@astrojs/image'

// https://astro.build/config
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		svelte(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		}),
		partytown()
	]
})
