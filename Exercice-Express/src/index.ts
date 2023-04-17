import { createServer } from 'http';
import { app } from './app';

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
  server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
}

startServer();
