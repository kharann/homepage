const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'primary-100': '#f0f2fa',
			'primary-light': '#dadff2',
			primary: '#8595D5',
			'primary-dark': '#6a77aa',
			black: '#0F161E',
			white: '#ffffff',
			gray: {
				light: '#f9f8f9',
				DEFAULT: '#6f6e77',
				dark: '#1a1523'
			},
			accent: '#11325E'
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
