import React from 'react';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import GlobalState from '../context/global/GlobalState';

import '../styles/main.scss';

const Layout = ({ children }) => {
    return (
        <GlobalState>
            <SEO />
            <Header />

            <main>
                {children}
            </main>

            <Footer />
        </GlobalState>
    );
};

export default Layout;
