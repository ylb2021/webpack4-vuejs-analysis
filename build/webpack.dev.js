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
        port: 8080,
        open: "chrome"
    }
});