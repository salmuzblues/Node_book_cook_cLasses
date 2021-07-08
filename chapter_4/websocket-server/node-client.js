const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:3000");
//toDo: add listeners 
ws.on("open", () => {
  console.log('Connected');
});
ws.on("close", () => {
  console.log('Disconnected');
});
ws.on("message", (message) => {
  console.log('CLIENT: Received from the server:', message);
});

setInterval(() => {
  ws.send('Hello'); // this is sending to server
}, 3000);