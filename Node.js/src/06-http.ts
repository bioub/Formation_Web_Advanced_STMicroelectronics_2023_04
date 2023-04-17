import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(8080, () => {
  console.log('Server started on port 8080');
});
