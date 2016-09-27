import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';

const Root = ({store, routes, history}) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes}/>
    </div>
  </Provider>
);

export default Root;
