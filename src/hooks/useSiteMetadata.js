import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    menuLinks {
                        name
                        path
                    }
                    contactDetails {
                        label
                        name
                        path
                    }
                }
            }
        }
    `);

    return site.siteMetadata;
};