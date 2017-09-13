var webpack           = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path              = require("path");

//环境变量配置

var WEBPACK_ENV       = process.env.WEBPACK_ENV || 'dev';



var getHtmlConfig = function(name,title) {   //获取html的方法
    return {
        template : './src/view/'+name+'.html',
        filename : 'view/'+ name +'.html',    //也是以output的路径为根本
        inject   : true,                //注入所有的资源到特定的 template 或者 templateContent 中
        title    : title,
        hash     : true,                  //添加哈希
        chunks   : ['common',name]     //需要添加模块
    }
};

var config= {
    entry: {
        'common'   :   ['./src/page/common/index.js'],
        "index"    :   ['./src/page/index/index.js'],
        "login"    :   ['./src/page/login/login.js'],
        "result"   :   ['./src/page/result/result.js']
    },
    output: {
        path:  './dist',
        publicPath:'/dist',
        filename: 'js/[name].js',
    },
    externals:{
       "jquery":'window.jQuery'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract("style-loader","css-loader")
             },
            {
                test:/\.(gif|png|jpg|woff2?|eot|ttf|otf|svg)\??.*$/,
                loader:'url-loader?limit=100&name=resource/[name].[ext]'

            },
            {
               test:/\.template$/,
               loader:'html-loader'
            }
            ]
    },
    resolve:{
        alias: {
            util    :__dirname + '/src/util',
            page    :__dirname + '/src/page',
            service :__dirname + '/src/service',
            image   :__dirname + '/src/image',
            node_modules   :  __dirname + '/node_modules'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',           //使用这种方式,避免每次都在页面require一次
            filename: 'js/base.js'     //都是基于output里的path里的路径
        }),
        new ExtractTextPlugin("css/[name].css"),       //把js里的css单独提取出来
        new HtmlWebpackPlugin( getHtmlConfig('index','首页')),
        new HtmlWebpackPlugin( getHtmlConfig('login',"登录")),
        new HtmlWebpackPlugin( getHtmlConfig('result',"重置")),
    ],
};


 /*if( WEBPACK_ENV === 'dev') {
        config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');   //开发时添加，线上的时候不用添加
 }*/


if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}



module.exports = config;
