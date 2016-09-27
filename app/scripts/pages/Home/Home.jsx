import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Home.css';

const Home = ({className}) => (
  <div className={className} styleName="home">
  </div>
);

export default CSSModules(Home, styles);
