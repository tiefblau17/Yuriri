const path = require('path');
const rules = require('./webpack.rules');

function srcPaths(src) {
  return path.join(__dirname, src);
}

module.exports = {
  devtool: 'source-map',
  target: 'electron-main',
  entry: './src/main/main.ts',
  module: {
    rules,
  },
  resolve: {
    alias: {
      '@main': srcPaths('src/main'),
      '@models': srcPaths('src/models'),
      '@renderer': srcPaths('src/renderer'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json']
  },
};