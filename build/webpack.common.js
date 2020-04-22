const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve(dir) {
    return path.join(__dirname, "..", dir);
}
module.exports = {
    context: path.resolve(__dirname, "../"),
    entry: {
        // vue: "./lib/vuejs/platforms/web/entry-runtime-with-compiler.js",
        app: "./example/todomvc/app.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            // template: "index.html",
            template: "example/todomvc/index.html",
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ],
    module: {
        rules: [
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