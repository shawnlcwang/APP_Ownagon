0. Ownagon Project Structure
- UI (static)
- REST API (non-static)
    + routes + controller (HTTP logic)=> services + db models (businness logic)=> database/external api
- Project Structure: 
    + APP
      |__________node_modules
      |
      |__________scripts
      |
      |__________dist
      |
      |__________src
      |           |__________config
      |           |           
      |           |__________routes
      |           |           
      |           |__________services
      |           |
      |           |__________dbms
      |           |
      |           |__________UI
      |           |
      |           |__________app.js
      |
      |__________other_configs
      |
      |__________webpack.configs
      |
      |__________package.json
      |
      |__________README.md



1. Setup Node JS Development Environment
- webserver framework: node.js
- package manager: npm 
- package config file: /package.json 
    + npm init
    + "main": "./src/app.js" 
- bundling config file: 
    + 
- linting config file: /.eslintrc.js
    + node node_modules\eslint\bin\eslint.js --init
    + use a popular style guide: JS Airbnb style guides
    + disable no-console: /* eslint-disable no-console */
- CI Linux/Mac config file: /.travis.yml
  + 
- CI Windows config file: /.appveyor.yml


- app-dependency packages: 
    + npm install express --save
    + npm install chalk (chalk.<color>())
    + npm install debug ($env:DEBUG='*';node app.js) 
    + npm install morgan (network traffic)
- dev-dependency packages: 
    + npm install eslint --save-dev (additional: VS install ESlint extension)
    + npm install nodemon --save-dev (/package.json: "nodemonConfig"{})
    + npm install npm-run-all --save-dev (run multiple npm scripts in par/seq)
- package config scripts {automation}: /package.json 
    + "start": "nodemon main"
    + "debug": "@powershell -Command $env:DEBUG='app:*';nodemon main"
    + "lint": "eslint main"



2. Use Template Engines with Express
- template file: /UI/views/index.ejs 
    + //app.use(express.static(path.join(__dirname, '/UI'), { index: false })); 
    + app.use(express.static()) 
- alternative template file: /UI/views/template.pug
- alternative template file: /UI/views/template.ejs
- template engines: jade(renamed: pug)
    + npm install pug 
- alternative engines: EJS 
    + npm install ejs (addtional: VS code install EJS support extension)
- templates: bootstrap zero

3. Express Middleware/Function
- app.js file: 
    + const express = require('express');
    + const router = express().Router();
- application-level middleware: <obj app = express()>
    + app.use(function (req, res, next) {
        next()
    })
    + app.METHOD() functions
- router-level middleware: <obj router = express().Router()>
    + router.use(function (req, res, next) {
        next()
    })
    + router.METHOD() functions
- error-handling middleware: <function (err, req, res, next)>
    + app.use(function (err, req, res, next) {
        console.error(err.stack)
        next()
    })
- built-in middleware: 
    + express.static()
    + express.json()
    + express.raw()
    + express.text()
    + express.urlencoded()
- third-party middleware: 
    + Use third-party middleware to add functionality to Express apps

4. Routing 
- router.js file: 
    + const express = require('express');
    + const router = express().Router();
- application-level middleware: <app.js>
    + app.use('/books', bookRouter);
- router-level middleware: <router.js>
    + bookRouter.route('/').METHOD()
    + bookRouter.route('/:id').METHOD()

5. SQL & NoSQL Databases (MS Azure & MongoDB: mongo client/mongod server)
- app.js file: 
    + const sql = require('mssql');
    + optional approach only in router-level for NoSQL
- adminRoutes.js/bookRoutes.js file: 
    + const sql = require('mssql');
    + const mongoClient = require('mongodb').MongoClient;
- application-level middleware: <app.js>
    + const config {}; 
    + sql.connect(config).catch((err) => debug(err));
- router-level middleware: <router.js>
    + bookRouter.route('/').METHOD((req, res) => {((asyn query){await}());})
    + bookRouter.route('/:id').METHOD((req, res) => {((asyn query){await}());})
- npm packages: 
    + npm install mssql
    + npm install body-parser

6. Authentication 
- index.ejs file: 
    + <form>
    + <input>
- app.js file: 
    + const bodyParser = require('body-parser');
    + const passport = require('passport');
    + const cookieParser = require('cookie-parser');
    + const session = require('express-session');
- authRoutes.js file:
- config directory: 
    + passport.js
    + local.strategy.js
- npm packages: 
    + npm install passport
    + npm install cookie-parser
    + npm install express-session
    + npm install passport-local <strategy>

- application-level middleware: <app.js>
    + app.use(bodyParser.json()); 
    + app.use(bodyParser.urlencoded({ extended: false })); 
    + app.use(cookieParser());
    + app.use(session({ secret: 'library' }));
    + require('./config/passport.js')(app); <separating file>
- router-level middleware: <router.js>
    + authRouter.route('/signUp').METHOD((req, res) => {((asyn query){await}());})

7. Third-Party APIs with Express
- 3rd-party API: goodreads.com/api
    + applicaiton name: Ownagon
    + company name: Ownagon
    + key: zIKByBcldOpKGkAmiSCyg
    + secret: t25OWCoK9VKIoAFbRIjJ9lclt5AQvN9nxBsXCyFE
- npm packages: 
    +   npm install axios
    +   npm install xml2js
