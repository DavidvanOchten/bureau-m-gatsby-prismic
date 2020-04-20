import React from 'react';
import { graphql } from 'gatsby';
import CopyHeading from '../components/copy/CopyHeading';
import ListContact from '../components/lists/ListContact';

export default ({ data }) => {
    const doc = data.prismic.allContacts.edges.slice(0, 1).pop();

    if (!doc) {
        return null;
    }

    const contactDetails = data.prismic.allGlobalss.edges[0].node.contact_details;
    const { heading, copy } = doc.node;

    return (
        <article className="contact">
            <div className="container">
                <CopyHeading heading={heading} headingLarge={true} copy={copy} />
            </div>

            <div className="container">
                <ListContact classes="contact__details" items={contactDetails}/>
            </div>
        </article>
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