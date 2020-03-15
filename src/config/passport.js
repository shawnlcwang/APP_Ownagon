const passport = require('passport');
require('./strategies/local.strategy')(); // intiailize excution

module.exports = function passportConfig(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    // stores user in session
    passport.serializeUser((user, done) => {
        done(null, user); // optional user.id
    });

    // retrieves user form session
    passport.deserializeUser((userId, done) => {
        // optional find user by id
        done(null, userId);
    });

    // require('./local.strategy');
};
