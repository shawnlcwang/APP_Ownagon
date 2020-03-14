/* eslint-disable no-console*/
import jsf from 'json-schema-faker'; 
import {schema} from './mockDataSchema.js'; 
import faker from 'faker'; 
import fs from 'fs'; 
import chalk from 'chalk'; 

jsf.extend("faker", function(){
    return faker; 
})

let outputFile = "./src/api/db.json"; 
//const json = JSON.stringify(jsf(schema)); 
console.log(jsf.version);
console.log(schema); 

jsf.resolve(schema).then(function(result){
    fs.writeFile(outputFile, JSON.stringify(result, null, 2), function(err){
        if (err){
            return console.log(chalk.red(err)); 
        }else{
            console.log(chalk.green(`Mock data generated here: ${outputFile}`)); 
        }
    }); 
}); 
