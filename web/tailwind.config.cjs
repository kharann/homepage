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
			white: '#ffffff'
		},
		fontFamily: {
			logo: 'Hack'
		}
	},
	plugins: []
};

module.exports = config;
