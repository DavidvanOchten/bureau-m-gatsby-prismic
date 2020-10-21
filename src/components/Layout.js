import React from 'react';
import GlobalProvider from '../context/global/GlobalProvider';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';

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
        </GlobalProvider>
    );
};

export default Layout;
