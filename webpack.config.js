const webpack = require( "webpack" );

module.exports = {
    entry: "./lib/index.js",
    output: {
        path: "dist/",
        filename: "index.js",

        // Export itself to a global var
        libraryTarget: "var",

        // Name of the global var: "Foo"
        library: "domWatcher"
    },

    // Module: {
    //     loaders: [{
    //         test: /\.jsx?$/,
    //         exclude: /node_modules/,
    //         loader: 'babel',
    //     }]
    // },
    plugins: [
        new webpack.optimize.UglifyJsPlugin( {
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        } )
    ]
};
