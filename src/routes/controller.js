// const { MongoClient, ObjectID } = require('mongodb');
// const debug = require('debug')('app:controller');

// function authController(nav) {
//     function getIndex(req, res) {
//         // using async & await - NoSQL MongoDB
//         const url = 'mongodb://localhost:27017'; // standard default mongodb port
//         const dbName = 'OwnagonDB';
//         (async function mongo() {
//             let client;
//             try {
//                 client = await MongoClient.connect(url);
//                 debug('Connected correctly to server');
//                 const db = client.db(dbName);
//                 const col = await db.collection('users');
//                 const books = await col.find().toArray();
//                 res.render(
//                     'bookListView',
//                     {
//                         // nav: [{ link: '/books', title: 'books' },
//                         //     { link: '/authors', title: 'authors' }],
//                         nav,
//                         title: 'Books',
//                         books
//                     }
//                 );
//             } catch (err) {
//                 debug(err.stack);
//             }
//             client.close();
//         }());
//     }

//     function getById(req, res) {
//         const { id } = req.params;
//         const url = 'mongodb://localhost:27017'; // standard default mongodb port
//         const dbName = 'OwnagonDB';

//         (async function mongo() {
//             let client;
//             try {
//                 client = await MongoClient.connect(url);
//                 debug('Connected correctly to server');
//                 const db = client.db(dbName);
//                 const col = await db.collection('books');
//                 const book = await col.findOne({ _id: new ObjectID(id) }); // require('mongodb').OBJECTID;
//                 debug(book);

//                 // book details from 3rd party API
//                 book.details = await bookService.getBookById(book.bookId);
//                 res.render(
//                     'bookView',
//                     {
//                         // nav: [{ link: '/books', title: 'books' },
//                         //     { link: '/authors', title: 'authors' }],
//                         nav,
//                         title: 'Books',
//                         book // book: book shorthand
//                     }
//                 );
//             } catch (err) {
//                 debug(err.stack);
//             }
//             client.close();
//         }());
//     }

//     function middleware(req, res, next) {
//         if (req.user) { // req.user.role
//             next();
//         } else {
//             res.redirect('/');
//         }
//     }

//     return {
//         getIndex,
//         getById,
//         middleware
//     };
// }

// function bookController(nav, bookService) {
//     function getIndex(req, res) {
//         // using async & await - NoSQL MongoDB
//         const url = 'mongodb://localhost:27017'; // standard default mongodb port
//         const dbName = 'OwnagonDB';
//         (async function mongo() {
//             let client;
//             try {
//                 client = await MongoClient.connect(url);
//                 debug('Connected correctly to server');
//                 const db = client.db(dbName);
//                 const col = await db.collection('books');
//                 const books = await col.find().toArray();
//                 res.render(
//                     'bookListView',
//                     {
//                         // nav: [{ link: '/books', title: 'books' },
//                         //     { link: '/authors', title: 'authors' }],
//                         nav,
//                         title: 'Books',
//                         books
//                     }
//                 );
//             } catch (err) {
//                 debug(err.stack);
//             }
//             client.close();
//         }());
//     }

//     function getById(req, res) {
//         const { id } = req.params;
//         const url = 'mongodb://localhost:27017'; // standard default mongodb port
//         const dbName = 'OwnagonDB';

//         (async function mongo() {
//             let client;
//             try {
//                 client = await MongoClient.connect(url);
//                 debug('Connected correctly to server');
//                 const db = client.db(dbName);
//                 const col = await db.collection('books');
//                 const book = await col.findOne({ _id: new ObjectID(id) }); // require('mongodb').OBJECTID;
//                 debug(book);

//                 // book details from 3rd party API
//                 book.details = await bookService.getBookById(book.bookId);
//                 res.render(
//                     'bookView',
//                     {
//                         // nav: [{ link: '/books', title: 'books' },
//                         //     { link: '/authors', title: 'authors' }],
//                         nav,
//                         title: 'Books',
//                         book // book: book shorthand
//                     }
//                 );
//             } catch (err) {
//                 debug(err.stack);
//             }
//             client.close();
//         }());
//     }

//     function middleware(req, res, next) {
//         if (req.user) { // req.user.role
//             next();
//         } else {
//             res.redirect('/');
//         }
//     }

//     return {
//         getIndex,
//         getById,
//         middleware
//     };
// }

// module.exports = bookController;
