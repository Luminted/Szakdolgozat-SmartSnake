var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/dist'),
  },
  devServer: {
  contentBase: path.resolve(__dirname, 'src/dist'),
  compress: true,
  port: 9000
},
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};