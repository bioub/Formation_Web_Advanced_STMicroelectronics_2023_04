

function hello(name: string, msg: 'Bonjour' | 'Hello') {
  return `${msg} ${name}`;
}

hello('Romain', 'Bonjour'); // ok
// hello('Romain', 'Hola'); // erreur


type Question = {
  question: string;
  answer: 'Yes' | 'No';
}

