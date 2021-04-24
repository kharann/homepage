import React from 'react';
import { styled } from 'stitches';
import Header from '../organisms/Header';

const Main = styled('main', {
  display: 'grid',
  minHeight: '100vh',
  gridTemplateColumns: '1fr min(75ch, 100%) 1fr;',
  '& > *': {
    gridColumn: 2,
  },
});

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default Layout;
