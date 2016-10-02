import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Home.css';
import PageCreatorContainer from 'containers/PageCreatorContainer';

const Home = ({className}) => (
  <div className={className} styleName="home">
    <PageCreatorContainer />
  </div>
);

export default CSSModules(Home, styles);
