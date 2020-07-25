import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <p>{data.education.nodes[1].title}</p>
      <p>{data.education.nodes[1].study}</p>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    education: allSanityEducation {
      nodes {
        title
        study
      }
    }
  }
`;
