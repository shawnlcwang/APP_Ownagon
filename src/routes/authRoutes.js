const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const debug = require('debug')('app:authRoutes');
const passport = require('passport');

const authRouter = express.Router();

module.exports = function router(nav) {
    authRouter.route('/signup')
        .post((req, res) => {
            const { username, password } = req.body;
            const url = 'mongodb://localhost:27017'; // standard default mongodb port
            const dbName = 'OwnagonDB';
            (async function addUser() {
                let client;
                try {
                    client = await mongoClient.connect(url);
                    debug('Connected correctly to server');
                    const db = client.db(dbName);
                    const col = await db.collection('users');
                    const user = { username, password };
                    const results = await col.insertOne(user);
                    debug(results);
                    req.login(results.ops[0], () => { // create user with .login created from passport.initialize()
                        res.redirect('/auth/profile');
                    });
                } catch (err) {
                    debug(err);
                }
            }());
            debug(req.body);
        });
    authRouter.route('/signin')
        .get((req, res) => {
            res.render('signin', {
                nav,
                title: 'Sign In'
            });
        })
        .post(passport.authenticate('local', {
            successRedirect: '/auth/profile',
            failureRedirect: '/'
        }));
    // authRouter.route('/logout') {
    //         req.logout
    // }
    authRouter.route('/profile')
        // authroizing users access scopes
        .all((req, res, next) => {
            if (req.user) {
                next();
            } else {
                res.redirect('/');
            }
        })
        .get((req, res) => {
            res.json(req.user);
        });

    return authRouter;
};
