// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src')
};

// Webpack configuration
module.exports = {
  entry: path.join('react-hot-loader/patch', paths.SRC, 'render.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  // Tell webpack to use html plugin
  // index.html is used as a template in which it'll inject bundled app.
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // Loaders configuration
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  // Enable importing JS files without specifying their extension
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    hot: true,
    proxy: {
      '/api/stocks/*': {
        target: 'http://localhost:3000'
      }
    }
  }
};