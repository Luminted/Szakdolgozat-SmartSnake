var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/dist'),
  },
  devServer: {
  contentBase: path.resolve(__dirname, 'src/dist'),
  public: "snake-ai.herokuapp.com",
  compress: true,
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
    new HtmlWebpackPlugin({
            title: 'Snake.io',
            template: 'src/dist/index.html',
            favicon: 'src/distfavicon.ico'}),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};