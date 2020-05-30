require('dotenv').config({
    path: '.env',
});

module.exports = {
    siteMetadata: {
        title: 'Bureau M',
        description: 'Description',
        author: 'Martijn van der Made'
    },
    plugins: [
        {
            resolve: 'gatsby-source-prismic-graphql',
            options: {
                repositoryName: 'bureau-m',
                accessToken: process.env.API_KEY,
                path: '/preview',
                previews: true,
                lang: 'nl-nl'
            }
        },
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve('./src/layouts/index.js'),
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Bureau M juridisch advies',
                short_name: 'Bureau M',
                start_url: '/',
                background_color: '#FFFFFF',
                theme_color: '#FFFFFF',
                display: 'standalone',
                icon: 'src/assets/img/favicon.png',
                // crossOrigin: 'use-credentials',
            },
        },
    ],
};