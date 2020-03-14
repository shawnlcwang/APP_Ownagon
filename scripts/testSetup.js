// Register babel to transpile before our tests run
require('babel-register')(); 

// Disable webpack features that Mocha does not support
require.extensions['.css']=function(){}; 
