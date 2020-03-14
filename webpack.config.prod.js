import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash'; 
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; 
// import webpack from 'webpack';
// import ExtractTextPlugin from 'extract-text-webpack-plugin'; 

// webpack configuration 
export default {
    mode: "none", 
    // application starts excute & webpack starts bundling 
    entry: {
        main: path.resolve(__dirname, 'src/index'), 
        vendor: path.resolve(__dirname, 'src/vendor')
    },
    // target directory for all output files
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js', 
        publicPath: '/'
    },
    // configure rules for different modules
    module: {
        rules: [
          {test: /\.jsx$/, exclude: /node_modules/, loader: ['babel-loader']},
          // {test: /\.css$/, use: ['style-loader','css-loader']}
          // {test: /\.css$/, use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])}
          {test: /\.css$/, use: [MiniCssExtractPlugin.loader,'css-loader']}
        ]
    }, 
    resolve: {}, 
    performance: {}, 
    // configure debugging meta info for browser devtools
    devtool: 'source-map', 
    // configure environment bundle should run 
    target: 'web',   
    // don't bundle but request these modules at runtime from the environment
    externals: [], 
    // display specific bundle information 
    stats: "errors-only", 
    // configure development servers
    devServer: {
        noInfo: true,
    },
    // configure production built bundle
    optimization:{
        minimize: true,
        // runtimeChunk: true,
        splitChunks: {
            chunks: "async",
            minSize: 1000,
            minChunks: 2,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true,
                }
            }
        }
    },
    // configure additonal plugins 
    plugins: [
        // create dynamic HTML file that includes reference to /dist
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify:{
                removeComments: true, 
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true, 
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true, 
                minifyJS: true, 
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true, 
            // any properties defined below are available in index.html 
            // trackJSToken: 'token'
        }), 
        // generate external css file with hash in the filename INSTEAD of having css bundled with html 
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),

        // hash files using MD5 so that name changes when the content changes
        new WebpackMd5Hash()

        // < DEPRECATED >
        // eliminate duplate packages when generating bundle
        // new webpack.optimize.DedupePlugin(),
        // minify JS
        // new webpack.optimize.UglifyJsPlugin(),
        // split webpack bundle
        // new webpack.optimize.CommonsCunkPlugin({name: 'vendor})
        // generate external css file with hash in the filename INSTEAD of having css bundled with html 
        // new ExtractTextPlugin('[name].[contenthash].css'),        
    ]
}
