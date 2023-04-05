

function hello(name: string, msg: 'Bonjour' | 'Hello') {
  return `${msg} ${name}`;
}

hello('Romain', 'Bonjour'); // ok
// hello('Romain', 'Hola'); // erreur

enum Choice {
  yes = 'Yes',
  no = 'No',
}

type Question = {
  question: string;
  answer: Choice;
}

const question: Question = {
  question: 'Ça va ?',
  answer: Choice.yes,
}
