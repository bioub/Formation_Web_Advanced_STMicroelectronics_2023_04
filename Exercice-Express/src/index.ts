import { createServer } from 'node:http';
import { app } from './app';
import mongoose from 'mongoose';

let port = 4000;

const server = createServer(app);

server.on('error', (err) => {
  if ((err as any).code === 'EADDRINUSE') {
    // si le port est occupé, on tente le port suivant
    port++;
    startServer()
  }
});

function startServer() {
  server.listen(port, async () => {
    console.log(`Server started on http://localhost:${port}`);
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log(`Mongoose connection pool created`);
  });
}

startServer();
