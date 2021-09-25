const path  = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "build"), //bundle.js, main.js myfile.js
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env", "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    performance: {
        hints: false
    },
    devServer: {
        historyApiFallback: true
    }
}

module.exports = config;