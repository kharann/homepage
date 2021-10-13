const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
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
			secondary: '#CC005C',
			black: '#0F161E',
			white: '#ffffff',
			gray: {
				light: '#f9f8f9',
				DEFAULT: '#6f6e77',
				dark: '#1a1523'
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
