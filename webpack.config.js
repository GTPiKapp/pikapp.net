'use strict';

const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: ['./frontend/index'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    configFile: '.eslintrc',
                    failOnWarning: false,
                    failOnError: false,
                },
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                    plugins: [['import', { libraryName: 'antd', style: true }]],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.less/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            { test: /\.css/, loader: 'style-loader!css-loader' },
            {
                test: /\.png$/,
                loader: 'url-loader',
                query: {
                    mimetype: 'image/png',
                    name:
                        './public/css/semantic/themes/default/assets/images/flags.png',
                },
            },
            {
                test: /\.svg$/,
                loader: 'url-loader',
                query: {
                    mimetype: 'image/svg+xml',
                    name:
                        './public/css/semantic/themes/default/assets/fonts/icons.svg',
                },
            },
            {
                test: /\.woff$/,
                loader: 'url-loader',
                query: {
                    mimetype: 'application/font-woff',
                    name:
                        './public/css/semantic/themes/default/assets/fonts/icons.woff',
                },
            },
            {
                test: /\.woff2$/,
                loader: 'url-loader',
                query: {
                    mimetype: 'application/font-woff2',
                    name:
                        './public/css/semantic/themes/default/assets/fonts/icons.woff2',
                },
            },
            {
                test: /\.[ot]tf$/,
                loader: 'url-loader',
                query: {
                    mimetype: 'application/octet-stream',
                    name:
                        './public/css/semantic/themes/default/assets/fonts/icons.ttf',
                },
            },
            {
                test: /\.eot$/,
                loader: 'url-loader',
                query: {
                    mimetype: 'application/vnd.ms-fontobject',
                    name:
                        './public/css/semantic/themes/default/assets/fonts/icons.eot',
                },
            },
            { test: /\.json$/, loader: 'json-loader' },
        ],
    },
    resolve: {
        extensions: ['.js', '.less', '.css'],
    },
    output: {
        path: path.join(__dirname, '/public/javascripts'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: './public',
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new Dotenv({ path: './.env.frontend' }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};
