import { useStaticQuery, graphql } from 'gatsby';

export const useGlobals = () => {
    const { prismic } = useStaticQuery(graphql`
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
                                }
                                link_text
                            }
                        }
                    }
                }
            }
        }
    `);

    return {
        menuLinks: prismic.allGlobalss.edges[0].node.menu,
        contactDetails: prismic.allGlobalss.edges[0].node.contact_details
    };
};