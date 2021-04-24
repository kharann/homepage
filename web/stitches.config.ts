import { createCss } from '@stitches/react';

export const { styled, css, getCssString, keyframes } = createCss({
  theme: {
    fonts: {
      system: 'Raleway',
    },
    colors: {
      primary: '#8595D5',
      richblack: '#0F161E',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
    },
  },
  utils: {
    full_bleed: (config) => (value) => value && { width: '100%', gridColumn: '1 / 4' },
  },
});
