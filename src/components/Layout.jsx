import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({children}) => (

    <div className="app">
        <Header/>
        {children}
        <Footer/>
    </div>

);

export default Layout;