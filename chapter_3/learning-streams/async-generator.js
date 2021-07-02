const{ Readable } = require('stream');

/* 
  Note the use of function* syntax. This syntax defines a generator function.
*/
async function* generate(){
  yield 'Node.js';
  yield 'is';
  yield 'a';
  yield 'Javascript';
  yield 'Runtime';
}
const readable = Readable.from(generate());

// function to output the content of our readable stream 
readable.on('data', (chunk) => {
  console.log(chunk);
});