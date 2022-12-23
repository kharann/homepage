const colors = require('./src/theme/colors_dark.cjs')

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
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': colors.gray[12],
						'--tw-prose-bold': colors.brown[11],
						'--tw-prose-invert-bullets': colors.brown[11],
						code: {
							'background-color': theme('colors.gray.3'),
							padding: theme('spacing.1'),
							'border-radius': theme('borderRadius.DEFAULT')
						}
					}
				}
			}),
			width: {
				thin: '2px'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
