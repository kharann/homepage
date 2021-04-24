import React from 'react';
import { keyframes, styled } from 'stitches';

const typewriter = keyframes({
  to: { width: 0 },
});

const blinkingCursor = keyframes({
  'from, to': { color: '$primary' },
  '50%': { color: 'transparent' },
});

const Text = styled('h1', {
  fontFamily: 'Hack',
  color: '$primary',
  margin: 0,
  display: 'flex',
  alignItems: 'center',
});

const AnimatedText = styled('span', {
  position: 'relative',
  color: 'white',
  // This part is for hiding parts of the text and the blinking and typing animation
  '&::after': {
    content: '_',
    color: '$primary',
    position: 'absolute',
    right: 0,
    width: '100%',
    background: '$richblack',
    // steps is length 9 because the length of all the letters are 9 in total
    animation: `${typewriter} 1.5s steps(9) forwards, ${blinkingCursor} 1s 10`,
  },
  whiteSpace: 'nowrap',
});

const Logo: React.FC = () => {
  return (
    <Text>
      ~$<AnimatedText>Anhkha Vo</AnimatedText>
    </Text>
  );
};

export default Logo;
