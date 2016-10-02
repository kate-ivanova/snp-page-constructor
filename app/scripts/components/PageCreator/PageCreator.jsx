import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './PageCreator.css';

const PageCreator = () => (
  <div styleName="page-creator">
    <input className="title"/>
    <input className="description"/>
  </div>
);

export default PageCreator;
