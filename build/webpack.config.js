const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true,
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: './dist',
    // historyApiFallback: true,
    // noInfo: true,
    // overlay: true,
  },
};
