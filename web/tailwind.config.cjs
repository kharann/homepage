const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			primary: {
				1: '#f0f2fa',
				2: '#dadff2',
				3: '#7688D0',
				4: '#586EC6',
				5: '#394FA7',
				6: '#24326A',
				DEFAULT: '#586EC6'
			},
			secondary: {
				DEFAULT: '#D31E66',
				dark: '#FFEF5C'
			},
			black: '#0F161E',
			white: '#ffffff',
			gray: {
				1: '#f9f8f9',
				2: '#CBCACE',
				3: '#b5b4b9',
				4: '#6f6e77',
				5: '#48444f',
				6: '#1a1523',
				DEFAULT: '#6f6e77'
			},
			accent: '#586EC6'
		},
		fontFamily: {
			hack: 'Hack',
			lato: 'Lato',
			poppins: 'Poppins'
		}
	},
	plugins: []
};

module.exports = config;
