import React from 'react';
import GlobalProvider from '../stores/global/GlobalProvider';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import { useStaticQuery, graphql } from 'gatsby';

import '../styles/main.scss';

const Layout = ({ children }) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);

    return (
        <GlobalProvider>
            <SEO />
            <Header />

            <div>{site.siteMetadata.title}</div>
            <main>
                {children}
            </main>

            <Footer />
        </GlobalProvider>
    );
};

export default Layout;
