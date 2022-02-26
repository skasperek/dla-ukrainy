const prodWebpack = require('./src/config/webpack.prod');
const devWebpack = require('./src/config/webpack.dev');

module.exports = (env) => {
    if (env.prod){
        return prodWebpack;
    }
    return devWebpack;
}
