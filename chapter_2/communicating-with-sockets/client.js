const net = require('net');

const HOSTNAME = 'localhost';
const PORT = 3000;

/*  HOW WORKS SOCKETS SERVER AND CLIENT
  1. we send from the client into socket.write().
  2. then Server takes it, the server manipulate the data.
  3. after that we finish to manipulate data we send again to client.
  4. then, we retrieve this data to show, in this case is socket.on() api.
*/
//TODO: try and connect to the server we configured in server,js 
const socket = net.connect(PORT, HOSTNAME); // this is the connection.
socket.write('World alex'); 
// We also need to add a function that will listen for data returned by socket.
socket.on('data', (data) => {
  console.log('Client: ', data.toString());
});
  