import React, { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Slices from '../components/Slices';

export default ({ data }) => {
    const doc = data.prismic.allHomes.edges.slice(0, 1).pop();

    if (!doc) {
        return null;
    }

    const { seo_title, seo_description, body } = doc.node;

    return (
        <Fragment>
            <SEO title={RichText.asText(seo_title)} description={RichText.asText(seo_description)} />

            <article className="home">
                <Slices items={body} />
            </article>
        </Fragment>
    );
};

export const query = graphql`
    query {
        prismic {
            allHomes {
                edges {
                    node {
                        seo_title
                        seo_description
                        body {
                            ... on PRISMIC_HomeBodyTitel_met_tekst {
                                type
                                primary {
                                    heading
                                    heading_large
                                    copy
                                }
                            }
                            ... on PRISMIC_HomeBodyAfbeelding {
                                type
                                primary {
                                    image
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;