import Logo from '@components/atoms/Logo';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { styled } from 'stitches';

const Div = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  height: '60px',
  background: '$richblack',
});

const Link = styled(GatsbyLink, {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
});

const Header: React.FC = () => {
  return (
    <Div>
      <Link to="/" partiallyActive={true}>
        <Logo />
      </Link>
      <p>Links here</p>
    </Div>
  );
};

export default Header;
