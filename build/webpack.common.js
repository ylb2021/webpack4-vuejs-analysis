const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');


function resolve(dir) {
    return path.join(__dirname, "..", dir);
}
module.exports = {
    context: path.resolve(__dirname, "../"),
    entry: {
        // vue: "./lib/vuejs/platforms/web/entry-runtime-with-compiler.js",
        //app: "./example/todomvc/app.js"
        app: "./src/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            // template: "example/todomvc/index.html",
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new webpack.DefinePlugin({
            __WEEX__: false
            // VERSION: JSON.stringify('5fa3b9'),
            // BROWSER_SUPPORTS_HTML5: true,
            // TWO: '1+1',
            // 'typeof window': JSON.stringify('object'),
            // 'process.env': {
            //     NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            // }
        }),
        new VueLoaderPlugin() // Vue加载

    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".json"],
        alias: {
            "compiler": resolve("lib/vuejs/compiler"),
            "core": resolve("lib/vuejs/core"),
            "shared": resolve("lib/vuejs/shared"),
            "web": resolve("lib/vuejs/platforms/web"),
            "weex": resolve("lib/vuejs/platforms/weex")
        }
    },
};