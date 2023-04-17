import { createServer } from 'node:net';

const server = createServer();

server.on('connection', (socket) => {
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: application/json\r\n');
  socket.write('Content-length: 15\r\n');
  socket.write('Server: Node.js 16\r\n');
  socket.write('\r\n');
  socket.write('{"msg":"Hello"}\r\n');
  socket.end();
});

server.on('close', () => {

});

server.on('listening', () => {
  console.log('Server started on port 8080');
});

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(8080);
