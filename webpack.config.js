const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: [
    // 'webpack-hot-middleware/client',
    './public/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'publicServed/'),
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
    }]
  }
};
