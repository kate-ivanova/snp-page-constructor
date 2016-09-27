/* eslint no-unused-vars: "off" */
import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Root from 'containers/Root';
import configureStore from 'store/configureStore';
import routes from './routes';

export default class Application {

  constructor() {
    this.store = configureStore();
    this.history = syncHistoryWithStore(browserHistory, this.store);
  }

  start() {
    render(
      <Root
        store={this.store}
        routes={routes}
        history={this.history}
      />,
      document.getElementById('app')
    );
  }
}
