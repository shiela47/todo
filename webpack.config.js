const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development"

let config = {
    entry: path.join(__dirname,'src/index.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename: "bundle.js"
    },
    mode: "development",
    target:"web",
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            favicon:path.join(__dirname,'src/assets/images/favicon.png')
        })
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:"vue-loader"
            },
            {
                test:/\.css$/,
                use: ['style-loader','css-loader','postcss-loader']
            },{
                test:/\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    'stylus-loader'
                ]
            },{
                test:/\.(less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader:'less-loader',
                        options:{
                            sourceMap:true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options:{
                        limit: 1024,
                        name: '[name]-shiela.[ext]'
                    }
                }]
            },{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
}

if(isDev){
    config.devtool = "cheap-module-source-map",
    config.devServer = {
        port:8080,
        host:"0.0.0.0",
        overlay:{
            errors:true
        },
        hot:true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config;