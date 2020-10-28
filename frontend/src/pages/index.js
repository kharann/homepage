import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const IndexPage = ({ data }) => {
  const { name, phone, github, mail } = data.personalInfo;
  return (
    <>
      <SEO />
      <Layout>
        <div>{name}</div>
        <div>{phone}</div>
        <div>{github}</div>
        <div>{mail}</div>
        <div>
          {data.education.nodes.map((edu, i) => (
            <p key={i}>{edu.title}</p>
          ))}
        </div>
      </Layout>
    </>
  );
};
export const query = graphql`
  {
    education: allSanityEducation {
      nodes {
        title
        study
      }
    }
    personalInfo: sanityPersonalInfo {
      name
      phone
      mail
      github
      linkedin
      homepage
    }
  }
`;

export default IndexPage;
