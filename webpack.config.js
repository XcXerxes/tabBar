const webpack=require("webpack");
const pkg=require("./package.json");
const HtmlWebpackPlugin=require("html-webpack-plugin");


module.exports={
    entry:__dirname+"/main.js",
    output:{
        filename:"bundle[hash].js",
        path:`${__dirname}/dist`
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                loader:"style!css?postcss"
            }
        ]
    },
    devtool:"eval-source-map",
    postcss:[
        require("autoprefixer")([{browser:['last 20 versions']}])
    ],
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            conpress:{
                warnings:false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:"public/template.html",
            title:"tabBar"
        })
    ]
}