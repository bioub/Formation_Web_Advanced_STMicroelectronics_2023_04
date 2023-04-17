import express from 'express';
import { todosRouter } from './todos/routes';
import cors from 'cors';

export const app = express();

// app.use sert à enregistrer un middleware (plugin) global (pour toutes les routes)
// cors permet de faire des requêtes Cross Origin
app.use(cors());
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});

// Ajouter vos routes ici :
// dans ce cas app.use permet d'enregistrer plusieurs routes sous un préfixe
app.use('/api/todos', todosRouter); // les routes préfixée par /api/todos

// Middleware qui permet de customiser les erreurs 404 :
app.use((req, res, next) => {
  res.status(404).json({
    msg: 'Not Found',
  })
});
