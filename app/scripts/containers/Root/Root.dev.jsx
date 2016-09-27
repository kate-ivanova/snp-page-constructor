import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import DevTools from 'containers/DevTools';

const Root = ({store, routes, history}) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes}/>
      <DevTools />
    </div>
  </Provider>
);

export default Root;
