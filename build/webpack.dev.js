const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        // historyApiFallback: true,
        // compress: true,
        port: 8080,
        open: "chrome",
        // watchContentBase: true,
    }
});