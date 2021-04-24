import Logo from '@components/atoms/Logo';
import React from 'react';
import { styled } from 'stitches';

const Div = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  height: '60px',
  background: '$richblack',
});

const Header: React.FC = () => {
  return (
    <Div>
      <Logo />
      <p>Links here</p>
    </Div>
  );
};

export default Header;
