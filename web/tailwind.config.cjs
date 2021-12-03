const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			primary: {
				1: '#f0f2fa',
				2: '#dadff2',
				3: '#586EC6',
				4: '#394FA7',
				5: '#24326A',
				DEFAULT: '#586EC6'
			},
			secondary: {
				DEFAULT: '#FFEF5C',
				dark: '#FFEF5C'
			},
			black: '#0F161E',
			white: '#ffffff',
			gray: {
				1: '#f9f8f9',
				2: '#b5b4b9',
				3: '#6f6e77',
				4: '#48444f',
				5: '#1a1523',
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
