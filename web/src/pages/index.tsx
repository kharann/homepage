import Layout from '@components/templates/Layout';
import React from 'react';
import { styled } from 'stitches';

const Text = styled('p', {
  fontFamily: '$system',
  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
  },
});

const IndexPage = () => {
  return (
    <Layout>
      <Text as="h1" size="3">
        Hello, from Stitches.
      </Text>
    </Layout>
  );
};

export default IndexPage;
