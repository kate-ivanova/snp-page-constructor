if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.build');
} else {
  module.exports = require('./configureStore.dev');
}
