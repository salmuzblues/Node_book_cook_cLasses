const fs = require('fs');
const path = require('path');
// process.cwd() is a function on the global process object 
// that returns the current directory of the Node.js process 
const filepath = path.join(process.cwd(), 'hello.txt');
// it reads content about our files.
const contents = fs.readFileSync(filepath, 'utf8');
console.log('Before: ', contents);
// TODO Edit the file
const upperContents = contents.toUpperCase(); // change contents 
fs.writeFileSync(filepath, upperContents); // write this changes into the file 
console.log('File updated');