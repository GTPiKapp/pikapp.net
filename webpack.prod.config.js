"use strict";

const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const lessToJs = require('less-vars-to-js');

module.exports = {
    entry: [
        './frontend/index'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    configFile: '.eslintrc',
                    failOnWarning: false,
                    failOnError: false
                }
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                    plugins: [['import', { libraryName: 'antd', style: true}]]
                },
                exclude: /node_modules/,
            },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {test:/\.svg$/,loader:'url-loader',query:{mimetype:'image/svg+xml',name:'./public/css/semantic/themes/default/assets/fonts/icons.svg'}},
            {test:/\.png$/,loader:'url-loader',query:{mimetype:'image/png',name:'./public/css/semantic/themes/default/assets/images/flags.png'}},
            {test:/\.woff$/,loader:'url-loader',query:{mimetype:'application/font-woff',name:'./public/css/semantic/themes/default/assets/fonts/icons.woff'}},
            {test:/\.woff2$/,loader:'url-loader',query:{mimetype:'application/font-woff2',name:'./public/css/semantic/themes/default/assets/fonts/icons.woff2'}},
            {test:/\.[ot]tf$/,loader:'url-loader',query:{mimetype:'application/octet-stream',name:'./public/css/semantic/themes/default/assets/fonts/icons.ttf'}},
            {test:/\.eot$/,loader:'url-loader',query:{mimetype:'application/vnd.ms-fontobject',name:'./public/css/semantic/themes/default/assets/fonts/icons.eot'}},
            {test: /\.json$/,loader: 'json-loader'}
        ],
    },
    resolve: {
        extensions: ['.js', '.less', '.css']
    },
    output: {
        path: path.join(__dirname, '/public/javascripts/'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new Dotenv({path: './.env.frontend'}),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
