"use strict";

var webpack = require('webpack');
let path = require("path");

let PROD = JSON.parse(process.env.PROD_ENV || '0');

console.log("Mode PROD : ", PROD);

let appProd;

if (PROD !== 0) {
    console.log("Don't use webpack-dev-server");
    appProd = path.resolve(__dirname, "../app.ts");
} else {
    console.log("Use webpack-dev-server");
    appProd = path.resolve(__dirname, "../app.ts"),
        "webpack-dev-server/client?http://0.0.0.0:8080/";
}

module.exports = {
    entry: {
        app: appProd
    },
    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: "app.bundle.js",
        publicPath: "/dist/"
    },
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },
    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',
    // Add the loader for .ts files.
    module: {
        loaders: [{
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: {
                    compilerOptions: {
                        experimentalDecorators: true,
                        target: "es5"
                    }
                }
            },
            {
                test: /\.svg$/,
                loader: "file-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /component.*\.html/,
                loader: "html-loader"
            },
            {
                test: /.*screen.*\.html/,
                loader: "html-loader"
            }
        ]
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : []
};