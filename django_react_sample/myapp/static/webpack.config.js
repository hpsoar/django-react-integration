var config = {

    entry: {
        app: './src/app.js'
    },
    output: {
        path: 'build',
        filename: "[name]_webpack.js",
        sourceMapFilename: "[name]_webpack.map"
    },
    cache: true,

    module: {
        loaders: [
          { test: /\.js$/, 
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: { presets: ['react', 'es2015'] }
        },
        ]
    },

    devtool: "source-map"
};


module.exports = config;
