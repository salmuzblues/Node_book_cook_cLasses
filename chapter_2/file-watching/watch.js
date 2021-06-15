const moment = require('moment');
const fs = require('fs');
const file = './file.txt';
const path = require('path');

// this brings of absolute path, not the relative  
const filePath = path.join(process.cwd(),'./file.txt');
console.log(filePath);
// calling ASYNC API 
/* fs.watchFile(filePath, (current, previous) => {
  const time = moment().format('MMMM Do YYYY, h:mm:ss a');
  return console.log(`${file} updated ${time}`);
}); */
// this api runs better than watchFile api 
fs.watch(file, (eventType, filename) => {
  const time = moment().format('MMMM Do YYYY, h:mm:ss a');
  return console.log(`${filename} updated ${time}`);
});