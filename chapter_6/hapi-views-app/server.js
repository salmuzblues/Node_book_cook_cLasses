const Hapi = require('@hapi/hapi');
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
// initialize all things within away function
const initialize =  async () => {
  // server object 
  const server = Hapi.server({
    port: PORT,
    host: HOSTNAME
  });
  await server.register(require('@hapi/vision'));
  server.views({
    engines: {
      ejs: require('ejs'),
    },
    relativeTo: __dirname,
    path: 'views'
  });
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) =>{
      return h.view('index', {
        title: 'Hapi'
      });
    }
  });
  await server.start();
  console.log('Server listening on', server.info.uri);
} 

initialize();