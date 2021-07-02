const fs = require('fs');
const stream = require('stream');
const util = require('util');

//convert the pipeline method into promise 
const pipeline = util.promisify(stream.pipeline);

const uppercase = new stream.Transform({
  transform(chunk, encoding, callback){
    callback(null, chunk.toString().toUpperCase());
  }
});

async function run(){
  await pipeline (
    fs.createReadStream('./file.txt'),
    uppercase,
    fs.createWriteStream('./secondNewFile.txt'),
  );
  console.log('Pipeline succeeded.');
}
// because it is a promises  you use  async function 
run().catch((err) => {
  console.log('Pipeline failed ', err);
});