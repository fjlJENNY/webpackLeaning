const express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

const compiler = webpack(config);


const app = express();
app.use(
    webpackDevMiddleware(compiler,{
        publicPath:config.output.publicPath
    })
);



app.listen(3003,()=>{
    console.log("Example listen at port ");
})