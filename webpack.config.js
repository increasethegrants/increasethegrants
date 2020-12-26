const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './_src/main.js',
    output: {
        path: path.resolve(__dirname, './assets/js'),
        filename: 'app.js',
    },
    mode: 'development',
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
                    },
                },
            },
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.mode = 'production'
}