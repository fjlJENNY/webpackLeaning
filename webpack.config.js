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
        ]
    },
    //mode:'production',
    mode:'development',

    plugins: [
        new WebpackConsole(),
    ]
}