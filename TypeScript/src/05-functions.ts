function hello(name: string): string {
  return `Hello ${name.toUpperCase()}`;
}

// void : pas valeur en retour
function log(msg: string): void {
  console.log(msg);
}

function returnUndefined(): undefined {
  // return obligatoire
  return;
}

function returnNever(): never {
  throw new Error('erreur');
}

function sum(a: number, b: number) {
  return a + b;
}

// sum(1);
sum(1, 2); // en TS seulement cet appel est valide
// sum('1', '2');
// sum(1, 2, 3);

function avecParamOpt(a: string, opt?: string) {
  if (opt) {

  }
}

avecParamOpt('val');

function avecDefaultParam(a: string, opt = '') {

}

avecDefaultParam('val');

function avecRestParam(a: string, ...others: string[]) {

}

avecRestParam('a', 'b', 'c', 'd', 'e');
