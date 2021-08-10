const mix = require('laravel-mix');
const nodeExternals = require('webpack-node-externals');
mix.js('./resources/js/app.js', './public/js').
    sass('resources/sass/app.scss', 'public/css').
    vue().
    webpackConfig({
        target: 'node',
        resolve: {
            fallback: {
                stream: require.resolve("stream-browserify"),
                constants: require.resolve("constants-browserify"),
                path: require.resolve("path-browserify")
            },
            mainFields: ["main", "module"]
        },
        devtool: "source-map",
        externals: [nodeExternals({})]
    });
    /*
    webpackConfig({
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: "vue-loader"
                }
            ]
        },
        resolve: {
            fallback: {
                stream: require.resolve("stream-browserify"),
                constants: require.resolve("constants-browserify"),
                path: require.resolve("path-browserify")
            },
            mainFields: ["main", "module"]
        },
        devtool: "nsource-map",
        externals: [nodeExternals({})]
    });
    */