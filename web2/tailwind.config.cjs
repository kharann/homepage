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
const mauve = {
	1: 'hsl(246, 6.0%, 9.0%)',
	2: 'hsl(240, 5.1%, 11.6%)',
	3: 'hsl(241, 5.0%, 14.3%)',
	4: 'hsl(242, 4.9%, 16.5%)',
	5: 'hsl(243, 4.9%, 18.8%)',
	6: 'hsl(244, 4.9%, 21.5%)',
	7: 'hsl(245, 4.9%, 25.4%)',
	8: 'hsl(247, 4.8%, 32.5%)',
	9: 'hsl(252, 4.0%, 45.2%)',
	10: 'hsl(247, 3.4%, 50.7%)',
	11: 'hsl(253, 4.0%, 63.7%)',
	12: 'hsl(256, 6.0%, 93.2%)',
}

const sage = {
  1: 'hsl(155, 7.0%, 8.4%)',
  2: 'hsl(150, 7.4%, 10.6%)',
  3: 'hsl(150, 6.7%, 13.1%)',
  4: 'hsl(150, 6.4%, 15.3%)',
  5: 'hsl(150, 6.1%, 17.4%)',
  6: 'hsl(150, 5.8%, 19.9%)',
  7: 'hsl(150, 5.5%, 23.6%)',
  8: 'hsl(150, 5.1%, 30.6%)',
  9: 'hsl(155, 6.0%, 42.5%)',
  10: 'hsl(153, 4.8%, 48.2%)',
  11: 'hsl(155, 5.0%, 61.8%)',
  12: 'hsl(155, 6.0%, 93.0%)',
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
	mauve: mauve,
	accent: '#73bbc5',
	highlight: '#4961C1',
	gray: gray,
	primary: {
		...blue,
		DEFAULT: "#b7e4c7"
	},
	sage,
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
