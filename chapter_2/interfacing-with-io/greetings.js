process.stdin.on('data', (data) => {
  // data is the buffer object 
  const name = data.toString().trim().toUpperCase();
  if( name !== ''){
    process.stdout.write(`Hello ${name}`);
  } else {
    process.stderr.write('Input was empty');
  }
}); 