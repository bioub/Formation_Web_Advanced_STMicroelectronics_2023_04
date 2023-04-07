// Node en CommonJS génère une fonction (pour créer une portée au niveau du fichier)
// et offre 5 variables (liées à CommonJS)
// function(exports, require, module, __filename, __dirname) {

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

exports.sum = sum;
exports.sub = sub;

// }
