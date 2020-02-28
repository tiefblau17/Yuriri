const rules = require('./webpack.rules');
const path = require('path');
const plugins = require('./webpack.plugins');

function srcPaths(src) {
  return path.join(__dirname, src);
}

module.exports = {
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    alias: {
      '@main': srcPaths('src/main'),
      '@models': srcPaths('src/models'),
      '@renderer': srcPaths('src/renderer'),
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
};
