var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main/webapp/resources/todo/app.js',
    output: {path: './src/main/webapp/resources', filename: 'bundle.js'},
    module : {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}