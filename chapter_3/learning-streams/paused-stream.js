const fs = require('fs');
const rs = fs.createReadStream('./file.txt');
// register a readable event handler
rs.on('readable', () => {
  // Read Data 
  let data = rs.read(); // take the data
  console.log('data', data);
  while (data !== null) {
    console.log('Read Chunk ', data);
    data = rs.read(); // take again data
  }
});
// manual logic to read the data chunks 

rs.on('end', () =>{
  console.log('No more data');
});