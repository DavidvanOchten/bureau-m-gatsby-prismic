import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, site }) => {
    const metaTitle = title || site.siteMetadata.title;
    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{ lang: 'nl-nl' }}
            title={metaTitle}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    property: 'og:title',
                    content: metaTitle,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: site.siteMetadata.author,
                },
                {
                    name: 'twitter:title',
                    content: metaTitle,
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                }
            ]}
        />
    );
};

// export default SEO;

const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`;

export default props => (
    <StaticQuery
        query={`${query}`}
        render={({ site }) => (
            <SEO {...props} site={site} />
        )}
    />
);