const fs = require('fs');

// Synchrone
try {
  const buffer = fs.readFileSync('.prettierrc');
  fs.writeFileSync('.prettierrc.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log('Erreur : ' + err.message);
}

// Asynchrone
// Callback hell
// Style illisible que prend le code asynchrone
// si :
// - on enchaine les opérations asynchrones
// - on centralise les erreurs
fs.readFile('.prettierrc', (err, buffer) => {
  if (err) {
    console.log('Erreur : ' + err.message);
  } else {
    fs.writeFile('.prettierrc.copy', buffer, (err) => {
      if (err) {
        console.log('Erreur : ' + err.message);
      } else {
        console.log('Copy done');
      }
    });
  }
});

// ^
// |
// |
// |                                      writeFile                lg
// |try { readFile } ...                  =>        ...            =>
// +---------------------------------------------------------------------------->
