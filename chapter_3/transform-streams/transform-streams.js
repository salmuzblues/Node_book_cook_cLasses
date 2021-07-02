//toDo: the transform stream we will create, we will convert all text from our file into uppercase
const fs = require('fs');
const { Transform } = require('stream'); // import transform class 
// then we have to read
const rs = fs.createReadStream('./file.txt');
// create writable stream, this is when we are transforming.
const newFile = fs.createWriteStream('./newFile.txt');
//  define our transform stream 
const uppercase = new Transform({
  transform (chunk, encoding, callback){
    callback(null, chunk.toString().toUpperCase());
  },
});
// we now need to chain all of our streams together 
rs.pipe(uppercase).pipe(newFile);
