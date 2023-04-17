import express from 'express';
import { todosRouter } from './todos/routes'

const app = express();

// Ajouter vos routes ici :
app.use('/api/todos', todosRouter); // les routes préfixée par /api/todos

app.listen(4000, () => {
  console.log('Server started on http://localhost:4000');
});
