const parts = require("./webpack.parts");

const {merge} = require("webpack-merge");
const path = require("path");
const config = {
    entry: {
        app: './src/index.js',
    },
    mode: "development",
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devtool: "eval",
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
}

const devOutput = merge([
    parts.loadJavaScript(),
    parts.loadMediaFiles(),
    parts.styleSheets(),
    parts.urlLoader(),
    parts.devServer({
        hot: true,
        client: {
            overlay: true,
            progress: true
        }
    }),
    parts.extractBundles(),
    parts.cleanDist({
        options: {
            root: path.resolve(__dirname, "./dist")
        }
    }),
    parts.webpack()
]);

module.exports = merge(config, devOutput)