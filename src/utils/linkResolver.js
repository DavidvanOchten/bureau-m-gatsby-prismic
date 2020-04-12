// https://prismic.io/docs/reactjs/beyond-the-api/link-resolving

export const linkResolver = doc => {
    switch (doc.type) {
        // case 'page':
        //     return `/${doc.uid}`;

        case 'home':
            return '/';

        case 'specialism':
            return '/specialisme';

        case 'contact':
            return '/contact';

        default:
            return '/';
    }
};