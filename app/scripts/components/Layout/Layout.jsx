import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import CSSModules from 'react-css-modules';
import styles from './Layout.css';

const Layout = ({children}) => (
  <div styleName="layout">
    <Header />
    <Content>{children}</Content>
    <Footer />
  </div>
);

export default CSSModules(Layout, styles);
