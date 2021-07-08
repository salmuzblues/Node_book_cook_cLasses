// import the module 
const SMTPServer = require('smtp-server').SMTPServer;
// select which port will be accessible 
const PORT = 4321;
//toDo: create SMTP Server Object 
//However, in production, it would not be recommended to disable TLS
//support and authentication.
const server = new SMTPServer({
  disabledCommands: ['STARTTLS','AUTH'],
  logger:true
});
// catch any errors 
server.on('error', (err) => {
  console.log(err);
});
// Finally, We can call the listen() function to start our SMTP Server 
server.listen(PORT);

