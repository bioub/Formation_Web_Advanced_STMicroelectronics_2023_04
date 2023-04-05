const names = ['Toto', 'Titi', 'Tata', 123];

// any === n'importe quel type
// === faire du JavaScript (donc à éviter)
// eslint en général l'interdit
function hello(name: any) {
  return `Hello ${name.toUpperCase()}`; // erreur avec 123
}

for (const n of names) {
  console.log(hello(n));
}
