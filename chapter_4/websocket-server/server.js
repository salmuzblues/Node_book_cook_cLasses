const WebSocket = require('ws');

//  Web Socket server, including which port it should be accessible 
// we registered a nested listener for the message event, which gets
//executed each time a message is received.
const WebSocketServer = new WebSocket.Server({
  port: 3000
});
// listen for connections and messages 
WebSocketServer.on('connection', (socket) => {
  socket.on('message', (msg) => { 
    console.log('SERVER: Received from client: ', msg);
    if (msg === 'Hello') socket.send('World'); // this is sending to client 
  });
});