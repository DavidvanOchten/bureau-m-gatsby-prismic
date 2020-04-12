import React from 'react';
import { graphql } from 'gatsby';
import CopyHeading from '../components/copy/CopyHeading';

export default ({ data }) => {
    const doc = data.prismic.allHomes.edges.slice(0, 1).pop();

    if (!doc) {
        return null;
    }

    return (
        <article className="home">
            {doc.node.body.map((slice, index) => {
                switch (slice.type) {
                    case 'titel_met_tekst':
                        const { heading, heading_large, copy } = slice.primary;

                        return (
                            <div className="container" key={index}>
                                <CopyHeading heading={heading} headingLarge={heading_large} copy={copy} />
                            </div>
                        );

                    default:
                        return null;
                }
            })}

            {/* Use gatsby-image: https://www.gatsbyjs.org/packages/gatsby-image/ */}
            <img src="https://images.unsplash.com/photo-1479293581560-aee98bb24f7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2944&q=80" alt="alt" />

        </article>
    );
};

export const query = graphql`
    query {
        prismic {
            allHomes {
                edges {
                    node {
                        type
                        seo_title
                        _linkType
                        body {
                            ... on PRISMIC_HomeBodyTitel_met_tekst {
                                type
                                primary {
                                    heading
                                    heading_large
                                    copy
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;