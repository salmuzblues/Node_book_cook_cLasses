const fs = require('fs');
const path = require('path');
// process.cwd() is a function on the global process object 
// that returns the current directory of the Node.js process 
const filepath = path.join(process.cwd(), 'hello.txt');
// it reads content about our files.
//* Asynchronous function needs a call back.
fs.readFile(filepath, 'utf8', (err, contents) => {
  if(err) return console.log(err);
  // change the contents to uppercase 
  const upperContents = contents.toUpperCase();
  // Call function 
  updatedFile(filepath, upperContents);
});

function updatedFile(filepath, contents){
  fs.writeFile(filepath, contents, (err) => {
    if(err) throw err;
    console.log('File Updated')
  });
  
}