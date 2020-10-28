const fs = require('fs');
const path = require('path');

const WebpackConsole = require('./webpack.console');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


const resolve = function(dst){
    return path.resolve(__dirname,dst);
}

module.exports = {
    entry: {
        // "app":{import:'./src/index.js',dependOn:'shared'},
        // "print":{import:"./src/print.js",dependOn:'shared'},
        "app": './src/index.js' ,
        "print": "./src/print.js",
        
        //"shared":'lodash',
    },
    output:{
        path:resolve('dist'),
        filename:"[name].[contenthash].js",
        publicPath:'/'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.ts$/,use:'ts-loader'},
            {test:/\.(jpg|png|jpeg|gif)$/,use:'file-loader'},
            {test:/\.(ttf|eot|woff|woff2|otf)$/,use:['file-loader']},
            {test:/\.xml$/,use:['xml-loader']},
            {test:/\.(csv|tsv)$/,use:['csv-loader']}
        ]
    },
    //mode:'production',
    mode:'development',
   



    plugins: [
        new CleanWebpackPlugin(
            {
                cleanStaleWebpackAssets:false,
            }
        ),
        new WebpackConsole(),
       
        new HtmlWebpackPlugin({
            title:"管理输出"
        }),
        
    ],

    // devtool:'source-map',
    devServer:{
        contentBase:'./dist'
    },

    optimization: {
        runtimeChunk:'single',
        splitChunks:{
            cacheGroups:{
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name:"vendors",
                    chunks:"all",
                }
            }
        }
    }   

}