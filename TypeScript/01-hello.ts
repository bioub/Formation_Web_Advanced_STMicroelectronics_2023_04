const names = ['Toto', 'Titi', 'Tata'];

function hello(name: string) {
  return `Hello ${name.toUpperCase()}`;
}

for (const n of names) {
  console.log(hello(n));
}
