var webpack = require('webpack')

function getLoaders() {
    return [{
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015']
        }
    }, {
        test: /\.scss$/,
        loader: "style!css!sass"
    }]
}

var mainConfig = {
    entry: ['./src/js/entry.jsx', "./src/css/main.scss"],
    output: {
        path: __dirname,
        filename: '/assets/client.js',
        publicPath: '/'
    },
    node: {
        __filename: true
    },
    module: {
        loaders: getLoaders()
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}

module.exports = mainConfig
