const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const doConfig = opts => {
  if (opts === null) {
    opts = {};
  }
  const IS_DEV = Boolean(opts.IS_DEV);
  return {
    context: path.resolve('app'),
    entry: {
      app: [
        'babel-polyfill',
        './scripts/main.js',
      ],
    },
    externals: {
      'jsdom': 'window',
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': 'window',
    },
    resolve: {
      extensions: [
        '',
        '.js',
        '.jsx',
        '.coffee',
      ],
      modulesDirectoriess: ['node_modules'],
      alias: require('./_aliases'),
    },
    resolveLoader: {
      modulesDirectories: ['node_modules'],
    },
    // output is definded in build an dev configs

    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loader: 'xo',
          exclude: /(node_modules|bower_components)/,
        },
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          include: path.join(__dirname, '../app'),
          loaders: ['react-hot', 'babel'],
        },
        {
          test: /\.coffee$/,
          loader: 'coffee',
        },
        {
          test: /\.jade$/,
          loader: 'jade',
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract('style', 'css!postcss?pack=sass!sass'),
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css?modules&&localIdentName=[local]__[hash:base64:5]!postcss'),
        },
        {
          test: /\.(png|jpe?g|ico)$/,
          loader: 'url?name=frassets/images/[name].[hash:6].[ext]&limit=4096',
        },
        {
          test: /images\/.*?\.(svg)$/,
          loader: 'url?name=frassets/images/[name].[hash:6].[ext]&limit=4096',
        },
        {
          test: /\.woff2?$/,
          loader: 'url?limit=10000&name=frassets/fonts/[name].[hash:6].[ext]',
        },
        {
          test: /\.([ot]tf|eot)$/,
          loader: 'file?name=frassets/fonts/[name].[hash:6].[ext]',
        },
        {
          test: /fonts\/.*?\.(svg)$/,
          loader: 'file?name=frassets/fonts/[name].[hash:6].[ext]',
        },
        {
        // custom file types
          test: /\.(pdf|zip)$/,
          loader: 'file?name=files/[name].[hash:6].[ext]',
        },
        {
          test: /\/bootstrap\/dist\/js\/bootstrap\.js/,
          loader: 'imports?jQuery=jquery',
        },
      ],
      noParse: [
        /jquery\/dist\/jquery\.js/,
        /node_modules\/sinon\//,
      ],
    },
    postcss: require('./_postcss'),
    plugins: [
      new (webpack.DefinePlugin)({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
      new (webpack.ContextReplacementPlugin)(/node_modules\/moment\//, /ru/),
      new (webpack.ProvidePlugin)({
        $: 'jquery',
        jQuery: 'jquery',
        /* eslint quote-props: "off" */
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
      new (HtmlWebpackPlugin)({
        filename: 'index.html',
        template: 'index.jade',
      }),
      new ExtractTextPlugin('frassets/app.[contenthash].css', {
        allChunks: true,
        disable: IS_DEV,
      }),
    ],

    sassLoader: {
      indentedSyntax: true,
      includePaths: [path.resolve(__dirname, 'app/styles')],
    },

    xo: {esnext: true},
  };
};

module.exports = doConfig;
