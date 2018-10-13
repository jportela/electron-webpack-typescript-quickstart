const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseConfig = require('./webpack.config.base');

module.exports = Object.assign({}, baseConfig, {
  target: 'electron-renderer',
  entry: {
    renderer: './src/renderer/index.ts',
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '..', 'views', 'renderer.html'),
      to: path.join(__dirname, '..', 'dist', 'renderer.html'),
    }])
  ]
})
