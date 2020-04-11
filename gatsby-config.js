// dotenv for API key Prismic

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
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve('./src/components/Layout.js'),
            },
        },
    ],
};