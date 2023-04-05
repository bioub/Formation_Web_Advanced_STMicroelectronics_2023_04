function log(val: string | number | boolean) {
  console.log(val);
}

log(123);
log('ABC');
log(false);
// log([]); // erreur
// log({}); // erreur

function withObject(obj: { a: string, b: string } | { b: string, c: string}) {
  // b existe dans tous les choix possibles donc on peut l'utiliser directement
  obj.b
}



function log2(val: string | number | boolean) {
  // narrowing
  // sans le if, typescript aurait fait une erreur (val pouvant etre number ou boolean)
  // l'union type est type safe (pas comme any qui pourrait faire une erreur)
  if (typeof val === 'string') {
    console.log(val.toUpperCase());
  }
}

function withObject2(obj: { a: string, b: string } | { b: string, c: string}) {
  // a est accessible si type narrowing
  if ('a' in obj) { // si a existe dans obj
    obj.a
  }
}
