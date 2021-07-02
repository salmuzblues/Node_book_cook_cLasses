const fs = require('fs');
const {pipeline, Transform} = require('stream');

// Transform Stream (this will convert the input into uppercase strings)

const uppercase = new Transform({
  transform(chunk, encoding, callback){
    callback(null, chunk.toString().toUpperCase());
  }
});

pipeline(
  // first it expects a readable stream that will read the file.txt file, creatReadStream() method
  fs.createReadStream('./file.txt'),
  // transform to lowercase to uppercase.
  uppercase,
  // create a file and write 
  fs.createWriteStream('./newFile.txt'),
  // handle errors 
  (err) => {
    if(err) console.error('Pipeline failed.', err);
    else 
      console.log('Pipeline succeeded.');
  }
);