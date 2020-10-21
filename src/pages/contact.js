import React from 'react';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import CopyHeading from '../components/copy/CopyHeading';
import ListContact from '../components/lists/ListContact';
import SEO from '../components/SEO';

export default ({ data }) => {
    const doc = data.prismic.allContacts.edges.slice(0, 1).pop();

    if (!doc) {
        return null;
    }

    const contactDetails = data.prismic.allGlobalss.edges[0].node.contact_details;
    const { seo_title, seo_description, heading, copy } = doc.node;

    return (
        <>
            <SEO title={RichText.asText(seo_title)} description={RichText.asText(seo_description)} />

            <article className="contact">
                <div className="container">
                    <CopyHeading heading={heading} headingLarge={true} copy={copy} />
                </div>

                <div className="container">
                    <ListContact classes="contact__details" items={contactDetails} />
                </div>
            </article>
        </>
    );
};

export const query = graphql`
    query {
        prismic {
            allContacts {
                edges {
                    node {
                        heading
                        copy
                        seo_title
                        seo_description
                    }
                }
            }
            allGlobalss {
                edges {
                    node {
                        contact_details {
                            link_label
                            link_text
                            link {
                                _linkType
                                ... on PRISMIC__ExternalLink {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
