const Hapi = require('@hapi/hapi');
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const path = require('path');
// initialize all things within away function
const initialize =  async () => {
  // server object 
  const server = Hapi.server({
    port: PORT,
    host: HOSTNAME
  });
  await server.register(require('@hapi/inert'));
  //The file() function has been injected onto the Response Toolkit by the
  //@hapi/inert plugin.
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.file(path.join(__dirname, 'files/file.txt'));
    }
  });
  await server.start();
  console.log('Server listening on', server.info.uri);
} 

initialize();