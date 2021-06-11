const fs = require('fs');
/* 
  process.argv is a property on the global process object that returns an array
  containing the arguments that were passed to the Node.js process.
  the first element of the process.argv array, process.argv[0] is the path of the node
  binary that is running (Users/mac/.nvm/versions/node/v15.8.0/bin/node). 
  the second element is the path of the file we are executing, 
  in this case, metadata.js (Users/mac/Desktop/node_cook_book/chapter_2/fetching-metadata/metadata.js), 
  finally, we passed the filename as the third command-line argument
  and therefore referenced it with process.argv[2] (./file.txt)
*/
const binary = process.argv[0];
const filePath = process.argv[1];
const file = process.argv[2];

//TODO: we will create a program that gives information about the file we pass to it as a parameter.
function printMetadata( binary, filePath, file) {
  console.log('binary: ', binary);
  console.log('file Path: ', filePath);
  console.log('file: ', file);
  try {
    const fileStats = fs.statSync(file);
    console.log(fileStats);
  } catch(e){
    console.error('Error reading file path: ', file);
  }
}

printMetadata(binary, filePath, file);