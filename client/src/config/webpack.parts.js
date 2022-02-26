const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

exports.loadJavaScript = ({
    test = /\.js$/,
    exclude = /node_modules/,
} = {}) => {
    return {
        module: {
            rules: [
                {
                    test,
                    exclude,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        }
    }
}

exports.loadMediaFiles = ({
    test = /\.(jpg|svg|wav)$/,
    filesOptions = {
        name: "files/[contenthash].[ext]"
    },
    exclude = /node_modules/,
} = {}) => {
    const loaders = [{
        loader: 'file-loader',
        options: filesOptions,
    }]
    return {
        module: {
            rules: [
                {
                    test,
                    exclude,
                    use: loaders
                }
            ]
        }
    }
}

exports.styleSheets = ({
    test = /\.(scss|css)$/,
    use = ["style-loader", "css-loader"]
} = {}) => {
    return {
        module: {
            rules: [
                {
                    test: test,
                    use: use
                }
            ]
        }
    }
}

exports.urlLoader = ({
    test = /\.(png)$/,
    urlOptions = {
        name: "files/[contenthash].[ext]"
    }
} = {}) => {
    const loaders = [{
        loader: "url-loader",
        options: urlOptions,
    }]
    return {
        module: {
            rules: [
                {
                    test,
                    use: loaders
                }
            ]
        }
    }
}

exports.cacheLoader = ({
    type = "filesystem"
} = {}) => {
    return {
        cache: {
            type: type
        }
    }
}

exports.devServer = ({
    compress = false,
    hot = false,
    client = {
        overlay: false,
        progress: false
    }
} = {}) => {
    return {
        devServer: {
            historyApiFallback: true,
            host: '127.0.0.1',
            port: 2053,
            allowedHosts: 'all',
            static: {
                directory: "./public",
                publicPath: "/"
            },
            hot: hot,
            compress: compress,
            https: false,
            client: client
        }
    }
}

exports.extractBundles = () => {
    return {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    app: {  
                        test: /[\\/]node_modules[\\/]/,
                        name: 'libs',
                        chunks: 'all',
                    }
                }
            }
        }
    }
}

exports.cleanDist = ({
    options
}) => {
    return {
        plugins: [
            new CleanWebpackPlugin(options),
        ]
    }
}

exports.webpack = () => {
    return {
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "./public/index.html",
                inject: true
            }),
        ]
    }
}