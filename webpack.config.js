const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            },
        }],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            '@app': path.resolve(__dirname, 'src/components/'),
        },
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    },
};
