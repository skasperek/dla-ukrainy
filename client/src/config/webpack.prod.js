const {merge} = require("webpack-merge");
const parts = require("./webpack.parts");
const path = require('path');
const config = {
    entry: {
        app: './src/index.js',
    },
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
}

const prodOutput = merge([
    parts.loadJavaScript(),
    parts.loadMediaFiles(),
    parts.styleSheets(),
    parts.urlLoader(),
    parts.cacheLoader(),
    parts.devServer({
        hot: false,
        compress: true
    }),
    parts.extractBundles(),
    parts.cleanDist({
        options: {
            root: path.resolve(__dirname, "./dist")
        }
    }),
    parts.webpack()
]);

module.exports = merge(config, prodOutput)