const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
// const mongoose = require('mongoose');
const debug = require('debug')('app:local.strategy');

// Heroku DATABASE_URI
// mongodb+srv://shawnlcwang:Meaning1791@ownagondb-pizmb.mongodb.net/test?retryWrites=true&w=majority

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
            const url = 'mongodb://localhost:27017'; // standard default mongodb port
            const dbName = 'OwnagonDB';
            (async function mongo() {
                let client;
                try {
                    client = await MongoClient.connect(process.env.DATABASE_URI, { useUnifiedTopology: true });
                    debug('Connecting to OwnagonDB: Log in authenticating...');
                    const db = client.db(dbName);
                    const col = await db.collection('users');
                    const user = await col.findOne({ username });
                    // debug(username);
                    // debug(user);
                    // debug(user.password);
                    // debug(password);
                    // await mongoose.connect(process.env.DATABASE_URI || url, { useUnifiedTopology: true });
                    // const userSchema = new mongoose.Schema({ username: String, password: String });
                    // const User = mongoose.model('User', userSchema);
                    // const user = await User.find({ username: `${username}`, password: `${password}` });
                    if (user.password === password) {
                        debug('Connected to OwnagonDB: Log in DONE');
                        done(null, user);
                    } else {
                        done(null, false);
                        // client.close();
                    }
                } catch (err) {
                    debug(err.stack);
                }
                client.close();
            }());
        }
    ));
};
