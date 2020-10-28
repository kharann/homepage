import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, title }: SEOProps) => {
  const query = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
          title
          description
          keywords
          author
        }
      }
    `
  );

  let site = query.sanitySiteSettings;
  const metaTitle = site.title || title;
  const metaDescription = site.description || description;

  return (
    <Helmet
      htmlAttributes={{
        land: lang || 'en'
      }}
      title={metaTitle}
      titleTemplate={`%s | ${metaTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.author
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta || [])}
    />
  );
};

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: [
    {
      name: string;
      content: string;
    }
  ];
  title: string;
}

export default SEO;
