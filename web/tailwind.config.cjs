const green = {
	1: 'hsl(146, 30.0%, 7.4%)',
	2: 'hsl(155, 44.2%, 8.4%)',
	3: 'hsl(155, 46.7%, 10.9%)',
	4: 'hsl(154, 48.4%, 12.9%)',
	5: 'hsl(154, 49.7%, 14.9%)',
	6: 'hsl(154, 50.9%, 17.6%)',
	7: 'hsl(153, 51.8%, 21.8%)',
	8: 'hsl(151, 51.7%, 28.4%)',
	9: 'hsl(151, 55.0%, 41.5%)',
	10: 'hsl(151, 49.3%, 46.5%)',
	11: 'hsl(151, 50.0%, 53.2%)',
	12: 'hsl(137, 72.0%, 94.0%)'
}
const brand = {
	1: '#d8f3dc',
	2: '#b7e4c7',
	3: '#95d5b2',
	4: '#74c69d',
	5: '#52b788',
	6: '#40916c',
	7: '#2d6a4f',
	8: '#1b4332',
	9: '#081c15'
}

const brown = {
	1: 'hsl(22, 15.0%, 8.7%)',
	2: 'hsl(20, 28.3%, 10.4%)',
	3: 'hsl(20, 28.0%, 14.0%)',
	4: 'hsl(21, 28.4%, 16.5%)',
	5: 'hsl(22, 28.7%, 18.9%)',
	6: 'hsl(23, 29.0%, 22.3%)',
	7: 'hsl(25, 29.5%, 27.8%)',
	8: 'hsl(27, 30.1%, 35.9%)',
	9: 'hsl(28, 34.0%, 51.0%)',
	10: 'hsl(28, 41.4%, 55.8%)',
	11: 'hsl(28, 60.0%, 64.5%)',
	12: 'hsl(30, 67.0%, 94.0%)'
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
	12: 'hsl(256, 6.0%, 93.2%)'
}

const colors = {
	background: mauve[1],
	foreground: {
		DEFAULT: mauve[12],
		accent: brand[1]
	},
	mauve: mauve,
	accent: '#73bbc5',
	brand: brand,
	green: green,
	brown: brown,
	highlight: {
		hover: brand[5],
		DEFAULT: brand[1]
	},
	primary: brand[2]
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
						'--tw-prose-body': colors.mauve[12],
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
