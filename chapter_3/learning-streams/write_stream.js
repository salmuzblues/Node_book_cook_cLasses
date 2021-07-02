const fs =  require('fs');
//* fs.createWriteStream creates the file.
const file = fs.createWriteStream('./file.txt');
 for (let i = 0; i < 100; i++) {
   file.write('Node.js is a javascript runtime built on Google chrome V8 Javascript engine.\n');
 }
