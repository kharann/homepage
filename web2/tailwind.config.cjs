/** @type {import('tailwindcss').Config} */
const blue = {
	0: '#eef1f9',
	1: '#dee2f4',
	2: '#bcc5e8',
	3: '#9ba8dd',
	4: '#798bd1',
	5: '#586EC6',
	6: '#46589e',
	7: '#354277',
	8: '#27283F',
	9: '#121628',
	10: '#0D0F1C',
	DEFAULT: '#586EC6'
}

const gray = {
	50: '#F9F8F9',
	100: '#e2e2e4',
	200: '#c5c5c9',
	300: '#a9a8ad',
	400: '#8c8b92',
	500: '#6f6e77',
	600: '#5f5b65',
	700: '#48444f',
	800: '#312c39',
	900: '#1A1523',
	DEFAULT: '#48444f'
}
const colors = {
	background: gray[50],
	foreground: {
		accent: '#2C3763',
		DEFAULT: gray[900]
	},
	accent: '#73bbc5',
	highlight: '#4961C1',
	gray: gray,
	primary: {
		...blue,
		DEFAULT: blue[5]
	},
	black: '#0F161E'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: colors,
			fontFamily: {
				hack: 'Hack',
				lato: 'Lato',
				poppins: 'Poppins'
			},
			rotate: {
				360: '360deg'
			},
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-body': colors.foreground.DEFAULT,
						'--tw-prose-headings': colors.foreground.accent
					}
				}
			},
			width: {
				thin: '2px'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
