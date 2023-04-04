const fs = require('fs/promises');

// async / await, nouveauté de ES2017
async function copy() {
  try {
    const buffer = await fs.readFile('.prettierrc');
    await fs.writeFile('.prettierrc.copy', buffer);
    console.log('Copy done');
  } catch (err) {
    console.log('Erreur : ' + err.message);
  }
}

copy();
console.log('Fin du fichier');
