const path = require("path");

const config = {
    mode : 'development',
    entry : './src/App.js',
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : 'App.js'
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.css$/,
                use: 'css-loader',
            }
        ]
    }
};

module.exports = config;