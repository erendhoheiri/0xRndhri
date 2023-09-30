import React from 'react';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css/normalize.css';
import Footer from './Footer';
import Search from './search/SearchModal';
import { SearchModalContextProvider } from '../contexts/searchModalContext';
import { IsAdminContextProvider } from '../contexts/isAdminContext';

function Layout({ children }) {
  return (
    <IsAdminContextProvider>
      <SearchModalContextProvider>
        <GlobalStyles />
        <Search />
        <Header />
        <main>{children}</main>
        <Footer />
      </SearchModalContextProvider>
    </IsAdminContextProvider>
  );
}

export default Layout;
