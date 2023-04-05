const { readFile, writeFile } = await import('fs/promises');

// Top Level await : nouveauté ECMAScript 2022
// ne fonctionne qu'avec les modules ESM
try {
  const buffer = await readFile('.prettierrc');
  await writeFile('.prettierrc.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log('Erreur : ' + err.message);
}
