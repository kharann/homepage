const green = {
  1: 'hsla(140, 94.9%, 38.7%, 0.016)',
  2: 'hsla(138, 99.9%, 38.5%, 0.051)',
  3: 'hsla(139, 97.7%, 36.9%, 0.087)',
  4: 'hsla(139, 98.5%, 32.7%, 0.134)',
  5: 'hsla(141, 100%, 30.4%, 0.200)',
  6: 'hsla(142, 99.0%, 28.9%, 0.295)',
  7: 'hsla(146, 99.5%, 27.6%, 0.428)',
  8: 'hsla(151, 99.5%, 28.8%, 0.644)',
  9: 'hsla(151, 99.9%, 28.0%, 0.812)',
  10: 'hsla(152, 99.6%, 25.8%, 0.840)',
  11: 'hsla(153, 99.9%, 21.0%, 0.906)',
  12: 'hsla(155, 99.9%, 7.4%, 0.902)',
}

const brand = {
	1: '#d8f3dc',
	2: '#004037',
	3: '#357246',
	4: '#74c69d',
	5: '#52b788',
	6: '#40916c',
	7: '#2d6a4f',
	8: '#1b4332',
	9: '#081c15'
}

const brown= {
  1: 'hsla(30, 94.3%, 34.6%, 0.012)',
  2: 'hsla(30, 94.3%, 34.6%, 0.036)',
  3: 'hsla(30, 97.7%, 33.9%, 0.083)',
  4: 'hsla(31, 98.5%, 34.2%, 0.134)',
  5: 'hsla(29, 100%, 34.3%, 0.200)',
  6: 'hsla(28, 99.2%, 34.6%, 0.291)',
  7: 'hsla(29, 99.8%, 33.8%, 0.412)',
  8: 'hsla(28, 100%, 33.3%, 0.553)',
  9: 'hsla(28, 99.9%, 25.5%, 0.655)',
  10: 'hsla(26, 99.6%, 22.0%, 0.679)',
  11: 'hsla(24, 99.6%, 16.0%, 0.726)',
  12: 'hsla(19, 98.8%, 3.9%, 0.820)',
}
const sand= {
  1: 'hsla(60, 89.3%, 18.3%, 0.012)',
  2: 'hsla(60, 78.1%, 9.0%, 0.028)',
  3: 'hsla(60, 95.7%, 6.9%, 0.059)',
  4: 'hsla(60, 84.4%, 5.3%, 0.087)',
  5: 'hsla(60, 93.5%, 3.7%, 0.114)',
  6: 'hsla(60, 86.7%, 4.6%, 0.146)',
  7: 'hsla(48, 92.1%, 5.5%, 0.193)',
  8: 'hsla(51, 94.5%, 5.0%, 0.291)',
  9: 'hsla(60, 96.6%, 3.0%, 0.475)',
  10: 'hsla(60, 96.5%, 2.3%, 0.522)',
  11: 'hsla(60, 94.0%, 1.7%, 0.632)',
  12: 'hsla(48, 92.4%, 1.2%, 0.891)',
}

module.exports = {
	gray: sand,
	brand: brand,
	green: green,
	brown: brown,
	background: 'hsl(30, 50.0%, 97.6%)',
	foreground: {
		DEFAULT: sand[12],
		accent: brand[1]
	},

	accent: '#73bbc5',
	highlight: {
		hover: brand[3],
		DEFAULT: brand[4]
	},
	primary: '#357246'
}