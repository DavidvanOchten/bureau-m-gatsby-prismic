import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import CopyHeading from '../components/copy/CopyHeading';
import GlobalContext from '../stores/global/GlobalContext';
import ListContact from '../components/lists/ListContact';

export default ({ data }) => {
    const { globals } = useContext(GlobalContext);

    const doc = data.prismic.allContacts.edges.slice(0, 1).pop();
    const { heading, copy } = doc.node;

    return (
        <article className="contact">
            <div className="container">
                <CopyHeading heading={heading} headingLarge={true} copy={copy} />
            </div>

            <div className="container">
                <ListContact classes="contact__details" items={globals.contactDetails}/>
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
        }
    }
`;