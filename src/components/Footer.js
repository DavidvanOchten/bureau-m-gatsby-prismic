import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import LinkPrismic from './links/LinkPrismic';
import LinkExternal from '../components/links/LinkExternal';

const Footer = ({ menuLinks, contactDetails }) => {
    return (
        <footer className="footer">
            <ul>
                {menuLinks.map((link, index) => (
                    <li key={index}>
                        <LinkPrismic classes="heading" to={link.link._meta.type} text={link.link_text[0].text} />
                    </li>
                ))}
            </ul>

            <div className="footer__details">
                <ul className="footer__list">
                    {contactDetails.map((item, index) => (
                        <li className="footer__list-item" key={index}>
                            {item.link ? (
                                <Fragment>
                                    <span>{item.link_label[0].text}: </span>
                                    <LinkExternal to={item.link} text={item.link_text[0].text} />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <span>{item.link_label[0].text}: </span>
                                    <span>{item.link_text[0].text}</span>
                                </Fragment>
                            )}
                        </li>
                    ))}
                </ul>

                <small className="footer__copyright">© 2020 — Bureau M juridisch advies</small>
            </div>
        </footer>
    );
};

// export default Footer;

const query = graphql`
    query {
        prismic {
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
                        menu {
                            link {
                                _linkType
                                ... on PRISMIC_Home {
                                    type
                                    seo_title
                                    _meta {
                                        type
                                        uid
                                    }
                                }
                                ... on PRISMIC_Contact {
                                    heading
                                    copy
                                    _meta {
                                        type
                                        uid
                                    }
                                }
                                ... on PRISMIC_Specialism {
                                    type
                                    seo_title
                                    _meta {
                                        type
                                        uid
                                    }
                                }
                                ... on PRISMIC_About {
                                    type
                                    seo_title
                                    _meta {
                                        type
                                        uid
                                    }
                                }
                            }
                            link_text
                        }
                    }
                }
            }
        }
    }
`;

// https://github.com/birkir/gatsby-source-prismic-graphql/issues/77
export default (props) => (
    <StaticQuery
        query={`${query}`}
        render={({ prismic }) => (
            <Footer
                menuLinks={prismic.allGlobalss.edges[0].node.menu}
                contactDetails={prismic.allGlobalss.edges[0].node.contact_details}
                {...props}
            />
        )}
    />
);
