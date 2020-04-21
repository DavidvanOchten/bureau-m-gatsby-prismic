import React from 'react';
import GlobalProvider from '../stores/global/GlobalProvider';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/main.scss';

const Layout = ({ children }) => {
    return (
        <GlobalProvider>
            <SEO />
            <Header />

            <main>
                {children}
            </main>

            <Footer />

            {/* Enables Prismic previews */}
            {/* <script async defer src='//static.cdn.prismic.io/prismic.js?repo=bureau-m&new=true'></script> */}
            <script dangerouslySetInnerHTML={{ __html:`window.prismic = { endpoint: 'https://bureau-m.cdn.prismic.io/api/v2' };` }} />
            <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js?new=true"></script>
        </GlobalProvider>
    );
};

export default Layout;
