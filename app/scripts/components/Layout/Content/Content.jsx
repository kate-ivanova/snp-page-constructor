import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Content.css';

const Content = ({className, children}) => (
  <div className={className} styleName="content-layout">
    {children}
  </div>
);

export default CSSModules(Content, styles);
