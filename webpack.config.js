
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const contextPath = path.join(__dirname, 'src/client');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
    context: contextPath,
    entry: ['./app.js'],
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        historyApiFallback: true,
        stats: 'minimal',
        proxy: {
            '/api': 'http://localhost:4000'
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }, {
                test: /\.(scss|sass)$/,
                loader: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS
                ]
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Job Hunter',
            favicon: '../server/template/favicon.ico',
            template: '../server/template/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react.*)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    }
};
