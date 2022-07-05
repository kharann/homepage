module.exports = {
	...require("../prettier.config.cjs"),
	plugins: [require('prettier-plugin-tailwindcss')],
	tailwindConfig: './tailwind.config.cjs'
};
