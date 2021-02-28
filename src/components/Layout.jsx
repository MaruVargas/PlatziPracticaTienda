import React, { Children } from 'react';

import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css';

const Layout = ({ children }) => {
  return (
    <diV className="Main">
      <Header />
      {children}
      <Footer />
    </diV>
  );
};

export default Layout;
