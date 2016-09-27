import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.css';

const Header = ({className}) => (
  <header className={className} styleName="header-layout">
  </header>
);

export default CSSModules(Header, styles);
