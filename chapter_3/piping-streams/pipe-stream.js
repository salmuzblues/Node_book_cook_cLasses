
const fs = require('fs');
const rs = fs.createReadStream('file.txt');
// pipe 
// we have piped a readable stream to a writeable stream using the pipe() method.
rs.pipe(process.stdout);