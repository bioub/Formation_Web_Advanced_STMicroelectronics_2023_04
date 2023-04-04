const fs = require('fs/promises');

// fs.readFile('.prettierrc', (err, buffer) => {
//   if (err) {
//     console.log('Erreur : ' + err.message);
//   } else {
//     fs.writeFile('.prettierrc.copy', buffer, (err) => {
//       if (err) {
//         console.log('Erreur : ' + err.message);
//       } else {
//         console.log('Copy done');
//       }
//     });
//   }
// });

// Premier intéret des promesses, l'API est uniforme
// fetch, import ou fs.readFile vont tous utiliser .then et .catch

// dans cette version là => Callback Hell
// fs.readFile('.prettierrc')
//   .then((buffer) => {
//     fs.writeFile('.prettierrc.copy', buffer)
//       .then(() => {
//         console.log('Copy done');
//       })
//       .catch((err) => {
//         console.log('Erreur : ' + err.message);
//       });
//   })
//   .catch((err) => {
//     console.log('Erreur : ' + err.message);
//   });

// Pour éviter le callback hell il faut
// dans un .then ou un .catch retouner une promesse
// dans ce cas on a plus besoin de les imbriquer
fs.readFile('.prettierrc')
  .then((buffer) => {
    return fs.writeFile('.prettierrc.copy', buffer);
  })
  .then(() => {
    console.log('Copy done');
  })
  .catch((err) => {
    console.log('Erreur : ' + err.message);
  });

// en condensant un peu les fonctions fléchées
fs.readFile('.prettierrc')
  .then((buffer) => fs.writeFile('.prettierrc.copy', buffer))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log('Erreur : ' + err.message));
