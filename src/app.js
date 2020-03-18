/*
 * NPM Packages
*/
require('newrelic');
const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { Server } = require('ws');
// const webpack = require('webpack');
// const config = require('../webpack.cinfig.dev');

/* eslint-disable no-console */
console.log(`__dirname:  ${__dirname}`); // path current JS file resides
console.log(`./: ${process.cwd()}`); // path current working directory

/*
 * Application Variables
*/
const app = express();
const port = process.env.PORT || 3000; // process.env REPLACE app.configure()
const wss = new Server({ server });
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
app.use(session({
    secret: 'anything',
    // resave: false,
    // saveUninitialized: true,
    // cookie: { secure: true }
}));

require('./config/passport.js')(app);

// serve static files with specified paths & setting property
app.use(express.static('./src/UI'));
// app.use(express.static(path.join(__dirname, '/UI'))); // use() before get() hence default 'index.html' served by static
// app.use('/bugtrack/views', express.static(path.join(__dirname, '/UI/assets')));

app.set('views', './src/UI');
// app.set('views', './src/UI'); // app setting property 'views'
app.set('view engine', 'ejs'); // app setting property 'view engine'
// console.log(`./views: ${app.get('views')}`);
// console.log(`./: ${process.cwd()}`);
const nav = [
    { link: '/', title: 'home' },
    // { link: '/aboutus', title: 'about us' },
    // { link: '/services', title: 'services' },
    // { link: '/team', title: 'team' },
    // { link: '/authors', title: 'log in' },

];

const authRouter = require('./routes/authRoutes')(nav);
const serviceRouter = require('./routes/serviceRoutes')(nav);

app.use('/auth', authRouter); // http://localhost:3000/auth
app.use('/services', serviceRouter); // http://localhost:3000/services

// routes HTTP GET requests to specified path with specified callback function
app.get('/', (req, res) => {
    res.render( // renders view as absolute path or relative path to 'views' setting
        'index',
        {
            nav: [
                { link: '/', title: 'home' },
                { link: '/auth/login', title: 'log in' },
            ],
            title: 'Ownagon'
        }
    );
});

// binds & listens for connections on specified host and port
app.listen(port, () => {
    debug(`Ownagon Server running on ${chalk.green(port)}...`);
});
