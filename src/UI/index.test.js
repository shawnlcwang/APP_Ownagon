import {expect} from 'chai'; 
import jsdom from 'jsdom'; 
import fs from 'fs'; 

// # Mocha Guide to Testing
// 1. `describe()` is merely for grouping, which you can nest as deep
// 2. `it()` is a test case
// 3. `before()`, `beforeEach()`, `after()`, `afterEach()` are hooks to run
// before/after first/each it() or describe().

describe('First test', ()=>{
    it('should pass', () =>{
        expect(true).to.equal(true); 
    });
});

describe('index.html', () =>{
    it('should have h1 say Users', (done) =>{
        const index = fs.readFileSync('./src/index.html', "utf-8"); 
        jsdom.env(index, function(err, window){
            const h1 = window.document.getElementsByTagName('h1')[0]; 
            expect(h1.innerHTML).to.equal("Users"); 
            done(); 
            window.close(); 
        });
    })
})
