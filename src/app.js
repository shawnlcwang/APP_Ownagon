/*
 * NPM Packages
*/
const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug');
// const webpack = require('webpack');
// const config = require('../webpack.cinfig.dev');

/* eslint-disable no-console */

/*
 * Application Level Middleware
*/
const app = express();
const port = process.env.PORT || 8000;


// const compiler = webpack(config);
// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './UI/index.html'));
});


app.listen(port, () => {
    debug(`Ownagon Server running on ${chalk.green(port)}...`);
});
