const mauve = {
	mauve1: '#fdfcfd',
	mauve2: '#f9f8f9',
	mauve3: '#f4f2f4',
	mauve4: '#eeedef',
	mauve5: '#e9e8ea',
	mauve6: '#e4e2e4',
	mauve7: '#dcdbdd',
	mauve8: '#c8c7cb',
	mauve9: '#908e96',
	mauve10: '#86848d',
	mauve11: '#6f6e77',
	mauve12: ''
};
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
			}
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
