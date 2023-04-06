// setTimeout(() => {
//   console.log('1s');
// }, 1000);

function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

timeout(1000).then(() => {
  console.log('1s');
});

// plus rapidement via un utilitaire
// const { promisify } = require('util');

// const timeout = promisify(setTimeout);
// timeout(1000).then(() => {
//   console.log('1s');
// });

// encore plus rapidement si on a une version promise de l'api
// const { setTimeout } = require('timers/promises');
// setTimeout(1000).then(() => {
//   console.log('1s');
// });
const fs = require('fs/promises');

Promise.all([
  fs.readFile('.editorconfig'),
  fs.readFile('.prettierrc'),
]).then((buffers) => {
  console.log(buffers[0].toString('utf-8')); // le fichier .editorconfig
});

// Promise.race la plus rapide des promesses en entrée
// exemple lire un fichier avec un timeout
// Promise.race([
//   fs.readFile('.editorconfig'),
//   setTimeout(1000),
// ]).then((buffer) => {

// });

// Promise.allSettled
// similaire a Promise.all mais on récupère tous les retours
// qu'ils soient en erreur ou pas

// Promise.any
// similaire a Promise.race mais on récupère le premier retour
// qui n'est pas une erreur


// Promise.resolve();
// Promise.reject();

class FileService {
  getEditorconfigContent() {
    return fs.readFile('.editorconfig', { encoding: 'utf-8'});
  }
}

class FakeFileService {
  getEditorconfigContent() {
    return Promise.resolve('Fake data');
    // return new Promise((resolve) => {
    //   resolve('Fake data');
    // });

    // return Promise.reject(new Error('Fake error'));
  }
}
