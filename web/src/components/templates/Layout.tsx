import React from 'react';
import { styled } from 'stitches';
import Header from '../organisms/Header';

const Main = styled('main', {
  display: 'grid',
  minHeight: '100vh',
  gridTemplateColumns: '1fr min(80ch, calc(100% - 64px)) 1fr',
  gridColumnGap: '32px',
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
