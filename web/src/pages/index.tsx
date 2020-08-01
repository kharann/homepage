import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      {data.education.nodes.map(edu => {
        return (
          <>
            <p>School: {edu.title}</p>
            <p>Major: {edu.study}</p>
          </>
        );
      })}
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
