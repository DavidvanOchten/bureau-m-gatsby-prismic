import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import CopyHeading from '../components/copy/CopyHeading';

export default ({ data }) => {
    const doc = data.prismic.allErrors.edges.slice(0, 1).pop();
    const { body } = doc.node;

    return (
        <Fragment>
            <article className="404">
                {body.map((slice, index) => {
                    const { heading, heading_large, copy } = slice.primary;

                    switch (slice.type) {
                        case 'titel_met_tekst':
                            return (
                                <div className="container" key={index}>
                                    <CopyHeading heading={heading} headingLarge={heading_large} copy={copy} />
                                </div>
                            );

                        default:
                            return null;
                    }
                })}
            </article>
        </Fragment>
    );
};

export const query = graphql`
    query {
        prismic {
            allErrors {
                edges {
                    node {
                        body {
                            ... on PRISMIC_ErrorBodyTitel_met_tekst {
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