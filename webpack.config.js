const path = require('path');
// const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    './public/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js'
  },
  // plugins: [
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin()
  // ],
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
      query: {
        presets: ['react', 'es2015'] // can add "es2015" to compile to es5
      }
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
      query: {
        presets: ['es2015'] // can add "es2015" to compile to es5
      }
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'bootstrap-sass$': 'bootstrap-sass/assets/stylesheets/bootstrap'
    }
  }
};
