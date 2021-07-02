const fs = require('fs');
const rs = fs.createReadStream('./file.txt');
// we can register a data event handler, which will execute each time a chunk of data has been read.
rs.on('data', (data) => {
  console.log('Read chunk: ', data.toString());
});
// it will be fired when there is no more data left to be consumed from stream.
rs.on('end', () =>{
  console.log('No more data.');
});