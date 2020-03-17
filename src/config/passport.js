const passport = require('passport');
// const session = require('express-session');
/* eslint-disable no-console */

require('./strategies/local.strategy')(); // intiailize excution
// const debug = require('debug')('app:passports');

module.exports = function passportConfig(app) {
    // app.use(session({
    //     secret: 'anything',
    //     resave: false,
    //     saveUninitialized: true,
    //     cookie: { secure: true }
    // }));
    app.use(passport.initialize());
    app.use(passport.session());
    // stores user in the session
    passport.serializeUser((user, done) => {
        done(null, user); // optional user.id
    });

    // retrieves user from the session
    passport.deserializeUser((userId, done) => {
        // optional find user by id
        done(null, userId);
    });

    // require('./local.strategy');
};
