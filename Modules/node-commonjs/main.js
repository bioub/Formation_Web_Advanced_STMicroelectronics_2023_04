const hello = require('./hello');
const math = require('./math'); // require retourne le exports de ./math.js
const assert = require('assert'); // vient du binaire de Node.js
const lodash = require('lodash'); // vient du dossier node_modules/lodash
const fs = require('fs'); // vient du dossier node_modules/lodash

// on ne peut pas importer un module ESM depuis un module CommonJS
// pour chalk il faudrait installer une version plus ancienne
// const chalk = require('chalk'); // vient du dossier node_modules/lodash

// mais ce sera possible avec la fonction import
// étant en module CommonJS on ne peut pas utiliser top-level await
import('chalk').then(({ default: chalk }) => {
  console.log(chalk.blue('Texte en bleu'));
});

console.log(math.sum(1, 2)); // 3
console.log(hello('Romain')); // Hello Romain

try {
  assert.equal(math.sum(1, 2), 4);
  console.log('math.sum ok');
} catch (err) {
  console.log('Erreur de math.sum');
}

console.log(lodash.kebabCase('Bonjour à tous')); // bonjour-a-tous

// le chemin relatif vers main.js, ne dépend pas de la position
// de main.js
// ça dépend du CWD (Current Working Directory) :
// là où on est positionné dans le terminal
fs.readFileSync(__dirname + '/main.js')
