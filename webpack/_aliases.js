const path = require('path');

module.exports = {
  'root': path.join(__dirname, '../app'),
  'images': path.join(__dirname, '../app/images'),
  'files': path.join(__dirname, '../app/files'),
  'fonts': path.join(__dirname, '../app/fonts'),
  'md': path.join(__dirname, '../app/md'),
  'utils': path.join(__dirname, '../app/scripts/utils'),
  'packages': path.join(__dirname, '../app/scripts/packages'),
  'common': path.join(__dirname, '../app/scripts/common'),
  'store': path.join(__dirname, '../app/scripts/store'),
  'actions': path.join(__dirname, '../app/scripts/actions'),
  'reducers': path.join(__dirname, '../app/scripts/reducers'),
  'pages': path.join(__dirname, '../app/scripts/pages'),
  'components': path.join(__dirname, '../app/scripts/components'),
  'containers': path.join(__dirname, '../app/scripts/containers'),
  'selectors': path.join(__dirname, '../app/scripts/selectors'),
  'bootstrap': path.join(__dirname, '../node_modules/bootstrap/dist/js/bootstrap'),
  'simple-blocks': 'simple-blocks/dist/simpleblocks',
  'sinon': 'sinon/pkg/sinon',
};
