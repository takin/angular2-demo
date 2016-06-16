var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry:'./src/main.ts',
    output: {
        path:'./dist',
        filename:'app.bundle.js'
    },
    module:{
        loaders:[
            {test:/\.ts$/, loader:'ts-loader'}
        ]
    },
    resolve:{
        extensions:['','.js','.ts']
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html'
        })
    ]
    
};