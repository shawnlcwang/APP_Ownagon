const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:local.strategy');

module.exports = function localStrategy() {
    passport.use(new Strategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        },
        (username, password, done) => {
            // const user = {
            //     username, password
            // };
            // done(null, user);
            const url = 'mongodb://localhost:27017/OwnagonDB'; // standard default mongodb port
            const dbName = 'OwnagonDB';
            (async function mongo() {
                let client;
                try {
                    client = await MongoClient.connect(process.env.DATABASE_URI || url, { useUnifiedTopology: true });
                    debug('Connecting to OwnagonDB: Log in authenticating...');
                    const db = client.db(dbName);
                    const col = await db.collection('users');
                    const user = await col.findOne({ username });
                    // debug(username);
                    // debug(user);
                    // debug(user.password);
                    // debug(password);
                    if (user.password === password) {
                        debug('Connected to OwnagonDB: Log in DONE');
                        done(null, user);
                    } else {
                        done(null, false);
                    }
                } catch (err) {
                    debug(err.stack);
                }
                client.close();
            }());
        }
    ));
};
