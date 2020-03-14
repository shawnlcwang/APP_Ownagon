JavaScript Node.js Development Environment: Node Application Boiler Plate/Starter Kit

1. Editors Configuration 
- config file: /.editorconfig (customizable) 
- editor: Visual Studio Code/Atom (plugin installatiion required) 

2. Package Management
- config file: /package.json (customizable)  
- dir: node_modules (npm i / npm install: install all the JS dev-env npm packages) 
- manager: Node Package Manager (npm)
- package updates: npm outdated => npm update / npm install <package>@latest / npm install <package>@<x.y.z SemVers>

3. Development Web Server
- starter file: /buildScripts/srcServer.js (boiler plate) 
- starter file: /src/index.html (boiler plate) 
- package file: /ngrok.exe (dev-in-progress sharing)
- dev-webserver framework: Express (configurable & production grade)
- dev-in-progress sharing: ngrok (./ngrok authtoken 1YgrbFfKyaBzPDEq9Vl9Fv2hQr9_2J5g2hdRBH8D9wuqMxgHn => ngrok http port# => url sharing)

4. Tasks Automation 
- config file: /package.json ("scripts":{})
- automation: npm scripts (use tools directly & no separate plugins)
- scripts options: npm run <start/security/fix/share/lint/test/mock-data/mock-api/build/deploy>

5. JS Versions Transpiling (post-2015: ES6/ES7/ES8 => post-2009: ES5)
- config file: /.babelrc (non npm specific)  
- alternative file: /package.json ("babel":{})
- transpiler: Babel 
- altervative transpilers: TypeScript (superset of ES6) / Elm (different syntax)]

6. JS Modules Bundling (bundle different JS modules => single executable browser JS file )
- config file: /webpack.config.dev.js (webpack bundler configuration)
- config file: /webpack.config.prod.js
- starter file: /src/index.js
- starter file: /src/index.css
- module format: ES6 modules 
- alternative module formats: IIFE / AsynchronousMD / CommonJS / UniversalMD (past formats)
- bundler: Webpack 
- alternative bundlers: Broswerify / Rollup / JSPM
- sourcemap: Webpack configuration {devtool: 'inline-source-map'} & use "debugger" keyword

7. JS Linting 
- config file: /.eslintrc.json (non npm specific)  
- alternative file: /package.json ("eslintConfig":{})
- linter: ESLint
- alternative linters: JSLint / JSHint
- rules: using recommended preset
- rules-warning/error: "no-console": 1 / "no-console": 2
- plugin: "plugin:import/errors", "plugin:import/warnings" 
- preset: "eslint:recommended"

8. JS Unit Testing 
- config file: /buildScripts/testSetup.js
- starter file: /src/index.test.js
- testing framework: Mocha  
- assertion library: Chai 
- helper library: JSDOM
- testing environment: Node (testing alongside src files upon save)

9. JS Continuous Intergration (CI) Testing for Production 
- config file: /.travis.yml
- CI servers: Travis (Linux/Mac) 
- config file: /.appveyor.yml
- CI servers: Appveyor (Windows)
- Git environment: git status > git add . > git commit -m "<msg>" > git push 

10. HTTP Calls APIs
- centralized API file: /src/api/userApi.js 
- HTTP call server Node apporach: Node (request module)
- alternative server Node approach: Node (http module)
- HTTP call client browser approach: Fetch 
- alternative client browser approach: XMLHttpRequest/jQuery/Angular
- HTTP call Node & browser approach: isomorphic-fetch/xhr/SuperAgent/Axios
- potential browser polyfill: https://polyfill.io/

11. Mock HTTP Calls APIs for Prototyping/Testing 
- starter file: /buildScripts/mockDataSchema.js
- starter file: /buildScripts/mockData.js
- starter database: /src/api/db.json
- Mock schema: JSON Schema Faker (npm install faker)
- Mock data: JSON Schema Faker (faker.js/chance.js/randexp.js)
- starter file: /src/api/baseUrl.js (/?useMockApi=true)
- Mock HTTP calls API: JSON Server (allow data manipulation get/delete)
- alternative mock API: Nock/static JSON/Express

12. Project Structure 
- files organization: by feature (NOT by file type)

13. Production Build 
- config file: /webpack.config.prod.js (webpack bundler configuration)
- starter file: build.js
- starter file: distServer.js
- minification: /webpack.config.prod.js (optimization:[minimize])
- dynamic HTML: /webpack.config.prod.js (plugin: [HtmlWebpackPlugin])
- bundle splitting: /webpack.config.prod.js (optimization:[splitChunks])
- cache busting: /webpack.config.prod.js (plugin: [WebpackMd5Hash])
- bundle extracting css from html: /webpack.config.prod.js (plugin: [MiniCssExtractPlugin])
- JS error logging: Track.js (recommended but optional: due to $ PRICING COST $) 

14. Production Deployment 
- Surge UI config file: /package.json ("scripts":{})
- Heroku API starter file: /app.json 
- Heroku API starter file: /Procfile  
- Heroku API link file: /src/api/baseUrl.js
- Heroku cmds: 
    + heroku login 
    + heroku create 
    + heroku git:remote -a <still-garden-98048>
    + git push heroku master
- separating projects approach: 
    + frontend static: UI project 
    + backend non-static: REST API project 
- cloud hosting: Surge (host UI) + Heroku (host API)
    + static: Github/Netlify/Surge
    + non-static: AWS/MS Azure/Google Could/Heroku/Firebase
    
15. Production Ready
- 1. development: npm start 
- 2. production build: npm run build
- 3. production deploy: npm run deploy

16. Production Updates: GitHub vs. NPM
- 1. Host on Github
- 2. Fork <starter kit> for new project
- 3. Pull Changes from master

