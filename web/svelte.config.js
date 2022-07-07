import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			pages: 'build',
			fallback: '404.html'
		}),
		prerender: {
			crawl: true,
			enabled: true,
			entries: ['*']
		},
		alias: {
			'@lib': 'src/lib',
			'@api': './src/api',
			'@components': './src/components/'
		}
	},

	preprocess: [
		preprocess({
			postcss: true,
			typescript: true
		})
	]
}

export default config
