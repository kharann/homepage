import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			fallback: '404.html',
			base: dev ? '' : '/homepage/',
			appDir: 'build'
		}),
		prerender: {
			crawl: true,
			enabled: true,
			entries: ['*']
		},
		vite: {
			resolve: {
				alias: {
					'@lib': path.resolve('./src/lib'),
					'@api': path.resolve('./src/api'),
					'@components': path.resolve('./src/components/')
				}
			}
		}
	},

	preprocess: [
		preprocess({
			defaults: {
				postcss: true,
				typescript: true
			},
			postcss: true,
			typescript: true
		})
	]
};

export default config;
