/*
 * NPM Packages
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const webpack = require('webpack');
// const config = require('../webpack.cinfig.dev');

/* eslint-disable no-console */
console.log(`__dirname:  ${__dirname}`); // path current JS file resides
console.log(`./: ${process.cwd()}`); // path current working directory

/*
 * Application Variables
*/
const app = express();
const port = process.env.PORT || 8000; // process.env REPLACE app.configure()
// const nav = [
//     { link: '/books', title: 'book' },
//     { link: '/services', title: 'Bug Tracking' }
// ];
// const config = {};


/*
 * Application Level Middlewares
*/

// const compiler = webpack(config);
// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));
app.use(morgan('tiny'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(session({ secret: 'shawnlcwang' }));

// serve static files with specified paths & setting property
app.use(express.static(path.join(__dirname, '/UI/'))); // use() before get() hence default 'index.html' served by static
app.set('views', './src/UI'); // app setting property 'views'
app.set('view engine', 'ejs'); // app setting property 'view engine'
console.log(`./views: ${app.get('views')}`);
console.log(`./: ${process.cwd()}`);

const authRouter = require('./src/routes/authRoutes.js')();

app.use('/auth', authRouter); // http://localhost:3000/auth

// routes HTTP GET requests to specified path with specified callback function
app.get('/', (req, res) => {
    res.render('index'); // renders view as absolute path or relative path to 'views' setting
});

// binds & listens for connections on specified host and port
app.listen(port, () => {
    debug(`Ownagon Server running on ${chalk.green(port)}...`);
});
