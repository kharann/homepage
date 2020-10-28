/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../header/header';

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-content-container">
        <main>{children}</main>
        <footer>
          <h2>Built by ya boy</h2>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
