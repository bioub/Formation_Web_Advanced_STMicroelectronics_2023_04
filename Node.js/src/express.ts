import express from 'express';

const app = express();

app.use(express.json()); // le body est au format JSON { "msg": "Coucou", "name": "Romain" }
// app.use(express.urlencoded()); // le body est au format URL encodé msg=Coucou&name=Romain

app.get('/', (req, res) => {
  res.json({
    msg: 'Home'
  })
})

app.get('/hello/:name', (req, res) => {
  res.json({
    msg: 'Hello ' + req.params.name
  })
})

app.post('/contact-us', (req, res) => {
  const body = req.body;
  // { "msg": "Coucou", "name": "Romain" }
  // msg=Coucou&name=Romain
  res.json({
    msg: 'Merci ' + body.name + ', nous allons vous recontacter'
  })
})

app.put('/api/user/1', () => {})
app.delete('/api/user/1', () => {})
app.patch('/api/user/1', () => {})

// démarre le serveur sur le port 8080
// pour l'arrêter CTRL-C
app.listen(8080, () => {
  console.log('Server started on port 8080');
});
