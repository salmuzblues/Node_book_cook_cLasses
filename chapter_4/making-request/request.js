const http = require('http');
//http.get('http://example.com', (resp) => resp.pipe(process.stdout));
const payload = `{
  "name": "Beth",
  "Job": "Software Engineer"
}`;
const opts = {
  method: 'POST',
  hostname: 'postman-echo.com',
  path: '/post',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  }
}
// 
const req = http.request(opts, (resp) => {
  process.stdout.write('Status Code: ' + resp.statusCode + '\n');
  process.stdout.write('Body: ');
  resp.pipe(process.stdout);
});

req.on('error', (err) => console.error('Error: ', err));
// finally, we need to send our request with the payload 
// write data to request body.
req.write(payload);
/* 
In the example req.end() was called. With http.request() one must always call req.end() 
to signify the end of the request - even if there is no data being written to 
the request body.
*/
req.end();