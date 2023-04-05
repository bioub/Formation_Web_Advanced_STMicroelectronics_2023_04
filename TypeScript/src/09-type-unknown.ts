// any pas type safe
// unknow type safe


// any n'est pas type safe, on empeche pas d'exécuter
// du code qui fera une erreur au runtime
function withAny(val: any) {
  console.log(val.toUpperCase());
}

withAny(123); // erreur au runtime

// à la place on peut utilier unknown
function withUnknown(val: unknown) {
  // unknow oblige le narrowing et donc
  // garanti l'absence d'erreur au runtime
  if (typeof val === 'string') {
    console.log(val.toUpperCase());
  }
}

withUnknown(123); // erreur au runtime
