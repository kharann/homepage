const green = {
	1: 'hsla(0, 0%, 0%, 0)',
	2: 'hsla(169, 100%, 48.5%, 0.027)',
	3: 'hsla(162, 98.7%, 57.9%, 0.070)',
	4: 'hsla(158, 98.6%, 59.7%, 0.105)',
	5: 'hsla(158, 98.6%, 60.7%, 0.140)',
	6: 'hsla(156, 99.9%, 62.0%, 0.187)',
	7: 'hsla(154, 99.5%, 63.1%, 0.257)',
	8: 'hsla(152, 99.7%, 64.2%, 0.370)',
	9: 'hsla(151, 99.7%, 63.8%, 0.605)',
	10: 'hsla(152, 99.9%, 66.5%, 0.661)',
	11: 'hsla(151, 99.7%, 69.2%, 0.740)',
	12: 'hsla(137, 100%, 95.8%, 0.980)'
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
	1: 'hsla(0, 0%, 0%, 0)',
	2: 'hsla(22, 99.6%, 53.6%, 0.035)',
	3: 'hsla(18, 97.8%, 69.0%, 0.088)',
	4: 'hsla(21, 98.2%, 71.0%, 0.123)',
	5: 'hsla(25, 98.4%, 72.1%, 0.158)',
	6: 'hsla(25, 98.7%, 73.5%, 0.206)',
	7: 'hsla(25, 99.0%, 74.6%, 0.289)',
	8: 'hsla(28, 99.2%, 75.3%, 0.407)',
	9: 'hsla(28, 100%, 74.8%, 0.642)',
	10: 'hsla(28, 99.9%, 74.9%, 0.712)',
	11: 'hsla(28, 99.9%, 74.9%, 0.843)',
	12: 'hsla(32, 98.2%, 95.7%, 0.979)'
}

const sand = {
	1: 'hsla(0, 0%, 0%, 0)',
	2: 'hsla(60, 89.8%, 91.4%, 0.026)',
	3: 'hsla(60, 95.5%, 92.5%, 0.056)',
	4: 'hsla(60, 75.6%, 96.4%, 0.078)',
	5: 'hsla(60, 81.9%, 95.2%, 0.104)',
	6: 'hsla(41, 87.6%, 94.8%, 0.134)',
	7: 'hsla(60, 95.4%, 96.2%, 0.172)',
	8: 'hsla(49, 93.5%, 95.7%, 0.254)',
	9: 'hsla(52, 97.3%, 96.2%, 0.391)',
	10: 'hsla(52, 97.8%, 96.7%, 0.451)',
	11: 'hsla(51, 97.0%, 97.8%, 0.597)',
	12: 'hsla(60, 88.7%, 99.8%, 0.923)'
}

module.exports = {
	gray: sand,
	brand: brand,
	green: green,
	brown: brown,
	background: 'hsl(61, 2.0%, 8.3%)',
	foreground: {
		DEFAULT: sand[12],
		accent: brand[1]
	},

	accent: '#73bbc5',
	highlight: {
		hover: brand[5],
		DEFAULT: brand[1]
	},
	primary: brand[2]
}