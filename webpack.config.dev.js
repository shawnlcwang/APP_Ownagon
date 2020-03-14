import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { truncate } from 'fs';

// webpack configuration 
export default {
    mode: "none", 
    // application starts excute & webpack starts bundling 
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    // target directory for all output files
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js', 
        publicPath: '/'
    },
    // configure rules for different modules
    module: {
        rules: [
          {test: /\.jsx$/, exclude: /node_modules/, loader: ['babel-loader']},
          {test: /\.css$/, use: ['style-loader','css-loader']}
        ]
    }, 
    resolve: {}, 
    performance: {}, 
    // configure debugging meta info for browser devtools
    devtool: 'inline-source-map', 
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
    // configure additonal plugins 
    plugins: [
        // Create HTML file that includes reference to bundle.js
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ]
}
