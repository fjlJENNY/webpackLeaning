const fs = require('fs');
const path = require('path');

const WebpackConsole = require('./webpack.console');

const resolve = function(dst){
    return path.resolve(__dirname,dst);
}

module.exports = {
    entry:'./src/index.js',
    output:{
        path:resolve('dist'),
        filename:"bundle.js",
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
        new WebpackConsole(),
    ]
}