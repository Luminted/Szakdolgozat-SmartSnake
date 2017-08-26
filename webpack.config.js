var path = require('path');
var webpack = require('webpack');
var PORT = (process.env.PORT || 5000);
console.log(PORT);

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/dist'),
  },
  devServer: {
  contentBase: path.resolve(__dirname, 'src/dist'),
  compress: true,
  port: PORT
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