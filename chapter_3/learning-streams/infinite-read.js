const fs = require('fs');
// we will use the /dev/urandom file, which is available on Unix - like operating systems. 
// this file is a pseudo-random number generator 
const rs = fs.createReadStream('/dev/urandom');
let size = 0; 
rs.on('data', (data)=> {
  size += data.length;
  console.log('File size: ', size);
});