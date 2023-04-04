const { readFile, writeFile } = await import('fs/promises');

// Top Level : nouveauté ECMAScript 2022
try {
  const buffer = await readFile('.prettierrc');
  await writeFile('.prettierrc.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log('Erreur : ' + err.message);
}
