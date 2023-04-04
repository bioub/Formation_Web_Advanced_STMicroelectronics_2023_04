const fs = require('fs');

// 2 exemples dans lesquels on va lire le fichier .prettierrc

// version synchrone avec buffer
// avantage : simple à lire
// inconvénient : tant que le fichier est en lecture le thread est bloqué

const bufferPrettierrc = fs.readFileSync('.prettierrc')
console.log(bufferPrettierrc.toString('utf-8'));

// le 2e fichier sera lu après le premier
const bufferEditorconfig = fs.readFileSync('.editorconfig')
console.log(bufferEditorconfig.toString('utf-8'));

// version synchrone avec str
// const str = fs.readFileSync('.prettierrc', { encoding: 'utf-8' });
// console.log(str);

// version asynchrone (version basée sur des callbacks)
// avantage : le thread est disponible pour lire une autre opération parallèle
// (ex : lire un autre fichier)
// inconvénient : plus difficile à lire
fs.readFile('.prettierrc', (_, buffer) => {
  console.log(buffer.toString('utf-8'));
});

// le 2e fichier sera lu en même temps que le premier
// inconvénient : dans quel ordre vont il etre lus ?
fs.readFile('.editorconfig', (_, buffer) => {
  console.log(buffer.toString('utf-8'));
});

