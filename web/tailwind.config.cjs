const colors = require('@radix-ui/colors');

function getColorCode(name, step) {
  return colors[name][`${name}${step}`];
}

function generateScale(name) {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;
    return [[id, `var(--${name}-${id}, ${getColorCode(name, id)})`]];
  }).flat();
  console.log(scale);

  return Object.fromEntries(scale);
}

const brand = {
  1: '#d8f3dc',
  2: '#b7e4c7',
  3: '#95d5b2',
  4: '#74c69d',
  5: '#52b788',
  6: '#40916c',
  7: '#2d6a4f',
  8: '#357246',
  9: '#1b4332',
  10: '#004037',
  11: '#081c15',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    colors: {
      green: generateScale('green'),
      brown: generateScale('brown'),
      gray: generateScale('sand'),
      sand: generateScale('sand'),
      brand,
      background: {
        DEFAULT: 'hsl(30, 50.0%, 97.6%)',
        dark: 'hsl(61, 2.0%, 8.3%)',
      },
      foreground: {
        DEFAULT: `var(--sand1)`,
        accent: brand[1],
      },
    },
    extend: {
      fontFamily: {
        hack: 'Hack',
        lato: 'Lato',
        poppins: 'Poppins',
      },
      rotate: {
        360: '360deg',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.sand.12'),
            '--tw-prose-bold': theme('colors.brown[11]'),
            '--tw-prose-invert-bullets': theme('colors.brown[11]'),
            code: {
              'background-color': theme('colors.gray.3'),
              padding: theme('spacing.1'),
              'border-radius': theme('borderRadius.DEFAULT'),
            },
          },
        },
      }),
      width: {
        thin: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
