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
};

const gray = {
	0: '#F9F8F9',
	1: '#e2e2e4',
	2: '#c5c5c9',
	3: '#a9a8ad',
	4: '#8c8b92',
	5: '#6f6e77',
	6: '#5f5b65',
	7: '#48444f',
	8: '#312c39',
	9: '#1A1523'
};

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			primary: {
				...blue,
				DEFAULT: blue[5]
			},
			secondary: {
				DEFAULT: '#D31E66',
				dark: '#FFEF5C'
			},
			black: '#0F161E',
			white: '#ffffff',
			gray: {
				...gray,
				DEFAULT: gray[5]
			}
		},
		fontFamily: {
			hack: 'Hack',
			lato: 'Lato',
			poppins: 'Poppins'
		},
		extend: {
			rotate: {
				360: '360deg'
			}
		}
	},
	plugins: []
};

module.exports = config;
