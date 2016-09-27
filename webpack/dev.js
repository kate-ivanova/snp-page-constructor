const webpack = require('webpack');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
// const _ = require('lodash');
const path = require('path');
const makeConfig = require('./_config');

const ALLOWED_MODES = {
  debug: true,
  dist: true,
  prod: true,
};

const BUILD_MODE = process.env.MODE || 'debug';

if (!ALLOWED_MODES[BUILD_MODE]) {
  console.log(`Build mode has wrong value. MODE=${BUILD_MODE}`);
  process.abort();
}

const config = makeConfig({
  BUILD_MODE,
  IS_DEV: true,
});

config.output = {
  path: path.join(__dirname, '../app/'),
  filename: 'frassets/[name].bundle.js',
  chunkFilename: 'frassets/[id].bundle.js',
};

module.exports = opts => {
  if (!opts) {
    opts = {};
  }
  if (opts.test === null) {
    opts.test = false;
  }
  config.devtool = 'eval';
  config.debug = true;
  config.output.publicPath = 'http://localhost:9000/';
  config.entry.app.unshift(
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server'
  );
  config.watchOptions = {timeout: 100};
  if (!opts.test) {
    config.plugins.push(new ModernizrWebpackPlugin(require('./_modernizr')));
  }
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
  return config;
};
