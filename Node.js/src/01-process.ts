import path from 'node:path';
import process from 'node:process';

// Entrées/Sorties standards
// process.stdin
// process.stdout
// process.stderr

// Variables d'environnements :
// Pas très performant (à mettre en cache)
console.log(process.env.PATH);

// Arguments du programme en CLI
// node dist/01-process.js --name Romain
console.log(process.argv.slice(2)); // [ '--name', 'Romain' ]

// stats sur l'instance de node en cours
console.log(process.uptime());
console.log(process.memoryUsage());
console.log(process.cpuUsage());
console.log(process.version);
console.log(process.versions);
console.log(process.platform);
console.log(process.arch);

console.log(process.cwd());
// mettre ces 2 lignes en début dans le main de node
// évite de faire des chemins relatifs à partir de __dirname
// (qui n'existe plus en Module ESM)
const __dirname = path.dirname(new URL(import.meta.url).pathname);
process.chdir(path.dirname(__dirname));
console.log(process.cwd());

process.exit(0); // termine le process node sans erreur
process.exit(1); // termine le process node avec erreur
