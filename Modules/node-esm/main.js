import hello from './hello.js';
import { sum } from './math.js'; // require retourne le exports de ./math.js
import assert from 'assert'; // binaire de Node.js

// lodash est commonjs, pas de problème si mon module est ESM
import lodash from 'lodash'; // vient du dossier node_modules/lodash
import chalk from 'chalk'; // vient du dossier node_modules/chalk
import fs from 'fs';
import path from 'path';

console.log(chalk.blue('Texte en bleu'));
console.log(sum(1, 2)); // 3
console.log(hello('Romain')); // Hello Romain

try {
  assert.equal(sum(1, 2), 4);
  console.log('math.sum ok');
} catch (err) {
  console.log('Erreur de math.sum');
}

console.log(lodash.kebabCase('Bonjour à tous')); // bonjour-a-tous

// exports, require, module, __filename et __dirname
// n'existent pas dans les modules ESM
// fs.readFileSync(__dirname + '/main.js')

// ES2022 introduit import.meta
console.log(import.meta);

// Pour récupérer __dirname, dans chaque fichier
const __dirname = path.dirname(new URL(import.meta.url).pathname);
console.log(__dirname);
