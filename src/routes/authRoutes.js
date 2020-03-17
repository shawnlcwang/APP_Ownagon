const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const debug = require('debug')('app:authRoutes');
const passport = require('passport');

const authRouter = express.Router();

// Heroku DATABASE_URI
// mongodb+srv://shawnlcwang:Meaning1791@ownagondb-pizmb.mongodb.net/test?retryWrites=true&w=majority

module.exports = function router(nav) {
    // authRouter.route('/')
    //     .get((req, res) => {
    //         res.render('login', {
    //             nav,
    //             title: 'Ownagon'
    //         });
    //     });
    authRouter.route('/signup')
        .get((req, res) => {
            res.render(
                'signup',
                {
                    nav,
                    title: 'Ownagon'
                }
            );
        })
        .post((req, res) => {
            const { username, password } = req.body;
            const url = 'mongodb://localhost:27017/OwnagonDB'; // standard default mongodb port
            const dbName = 'OwnagonDB';
            (async function addUser() {
                let client;
                try {
                    client = await mongoClient.connect(process.env.DATABASE_URI || url, { useUnifiedTopology: true });
                    debug('Connected to OwnagonDB');
                    const db = client.db(dbName);
                    const col = await db.collection('users');
                    const user = { username, password };
                    const results = await col.insertOne(user);
                    debug('Connected to OwnagonDB: Sign Up DONE');
                    req.login(results.ops[0], () => { // create user with .login created from passport.initialize()
                        res.redirect('/auth/profile');
                    });
                } catch (err) {
                    debug(err);
                }
            }());
        });
    authRouter.route('/login')
        .get((req, res) => {
            res.render('login', {
                nav,
                title: 'Ownagon'
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
            // debug('HERE');
            // debug(res);
            // debug(req.user);
            if (req.user) {
                next();
            } else {
                res.redirect('/');
            }
        })
        .get((req, res) => {
            debug('HERE2');
            // debug(req.user);
            // res.json(req.user);
            res.render('profile', {
                nav,
                title: 'Ownagon'
            });
        });

    return authRouter;
};

// module.exports = router;
