const path = require('path');
let mode = "development";
let target = "web";
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
if(process.env.NODE_ENV === "production"){
    mode = "production";
    target = "browserslist"
}
module.exports = {
    mode: mode,
    target: target,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.m?jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }
    ]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
    devtool: "source-map",
    devServer:{
        contentBase: "./dist",
    }
};