const express = require('express');
// const sql = require('mssql');
// const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:serviceRoutes');

// const bookController = require('../controllers/bookController');
const serviceRouter = express.Router(); // create new router object
// const bookService = require('../services/goodreadsService.js');


module.exports = function router() {
    serviceRouter.route('/tracker')
        .get((req, res) => {
            debug('Connected to third-party API: Retrieving Bugify...');
            res.redirect('http://demo.bugify.com/login');
            // // using async & await - NoSQL MongoDB
            // const url = 'mongodb://localhost:27017'; // standard default mongodb port
            // const dbName = 'OwnagonDB';
            // (async function mongo() {
            //     let client;
            //     try {
            //         client = await MongoClient.connect(url);
            //         debug('Connected to OwnagonDB: Retrieving Bugs...');
            //         const db = client.db(dbName);
            //         const col = await db.collection('bugs');
            //         const books = await col.find().toArray();
            //         res.render(
            //             'tracker',
            //             {
            //                 // nav: [{ link: '/books', title: 'books' },
            //                 //     { link: '/authors', title: 'authors' }],
            //                 nav,
            //                 title: 'Ownagon: Bug Tracker',
            //                 books
            //             }
            //         );
            //     } catch (err) {
            //         debug(err.stack);
            //     }
            //     client.close();
            // }());
        });
    return serviceRouter;
};
