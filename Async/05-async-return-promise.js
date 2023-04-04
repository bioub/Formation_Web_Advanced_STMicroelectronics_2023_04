async function copy() {
  throw new Error('Un message d\'erreur');
}

async function main() {
  try {
    await copy();
  } catch (err) {
    console.log(err.message);
  }
}

main();
