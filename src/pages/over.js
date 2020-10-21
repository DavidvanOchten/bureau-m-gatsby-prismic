import React, { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Image from '../components/images/Image';

export default ({ data }) => {
    const doc = data.prismic.allAbouts.edges.slice(0, 1).pop();

    if (!doc) {
        return null;
    }

    const { seo_title, seo_description, title, tekst_met_profiel_foto } = doc.node;

    return (
        <Fragment>
            <SEO title={RichText.asText(seo_title)} description={RichText.asText(seo_description)} />

            <article className="about">
                <header className="container">
                    <div className="copy-heading">
                        <h1 className="copy-heading__heading-large heading-large">{RichText.asText(title)}</h1>
                    </div>
                </header>

                {tekst_met_profiel_foto.map((item, index) => (
                    <div className="copy-image container" key={index}>
                        <Image classes={'copy-image__image'} {...item.foto} />
                        <div className="copy-image__container-text">{RichText.render(item.tekst)}</div>
                    </div>
                ))}
            </article>
        </Fragment>
    );
};

export const query = graphql`
    query {
        prismic {
            allAbouts {
                edges {
                    node {
                        seo_description
                        seo_title
                        tekst_met_profiel_foto {
                            foto
                            tekst
                        }
                        title
                    }
                }
            }
        }
    }
`;
