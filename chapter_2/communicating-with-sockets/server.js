//* Create a TCP 
const net = require('net');
const HOSTNAME = 'localhost';
const PORT = 3000;

net.createServer((socket) => { // ConnectionListener
  console.log('Client connected');
  // data event 
  socket.on('data', (name) => { // register a function to execute each time data was received.
    socket.write(`Hello ${name}`);
  });
})
.listen(PORT, HOSTNAME);