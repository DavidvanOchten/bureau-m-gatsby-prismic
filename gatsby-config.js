require('dotenv').config({
    path: '.env',
});

module.exports = {
    siteMetadata: {
        title: 'Bureau M',
        description: 'Description',
        author: 'Martijn van der Made',
        menuLinks: [
            {
                name:'Specialisme',
                path:'/specialisme'
            },
            {
                name:'Contact',
                path:'/contact'
            },
            {
                name:'Home',
                path:'/'
            }
        ],
        contactDetails: [
            {
                label: "Telefoon",
                name: "06 39 649 728",
                path: "tel: 06 39 649 728"
            },
            {
                label: "E-mail",
                name: "contact@bureau-m.com",
                path: "mailto: contact@bureau-m.com"
            },
            {
                label: "KVK",
                name: "74525395"
            }
        ]
    },
    plugins: [
        {
            resolve: 'gatsby-source-prismic-graphql',
            options: {
                repositoryName: 'bureau-m',
                accessToken: process.env.API_KEY,
                lang: 'nl-nl'
            }
        },
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve('./src/components/Layout.js'),
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass'
    ],
};