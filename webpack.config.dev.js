var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

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
        /*
        new FaviconsWebpackPlugin({
            // Your source logo
            logo: './src/dist/favicon.png',
            // The prefix for all image files (might be a folder or a name)
            prefix: 'icons-[hash]/',
            // The name of the json containing all favicon information
            statsFilename: 'iconstats-[hash].json',
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,

            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Snake.io',
            template: 'src/dist/index.html',
        }),
        */
        new webpack.optimize.ModuleConcatenationPlugin(),
    ]
};