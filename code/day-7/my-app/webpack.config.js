const HtmlWebpackPlugin = require('html-webpack-plugin')
const pathModule = require('path')
const webpackConfigObject = {
    entry: pathModule.resolve(__dirname, 'source', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: pathModule.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.html$/,
            use: 'html-loader'
        }, {
            test: /\.css$/,
            use: ['css-loader', 'style-loader']
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: pathModule.resolve(__dirname, 'index.html')
    })],
    devServer: {
        contentBase: pathModule.resolve(__dirname, 'build'),
        port: 4000,
        compress: true
    }
}
module.exports = webpackConfigObject